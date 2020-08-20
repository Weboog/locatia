import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApartsService } from '../aparts.service';
import { Apart } from '../../shared/custom-types/apart';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SliderService } from '../../shared/slider/slider.service';
import { FeaturedAppartsComponent } from './featured-apparts/featured-apparts.component';
import { FeaturedAppartsService } from './featured-apparts/featured-apparts.service';
import { SlideItem } from 'src/app/shared/slider/slide-item';

@Component({
  selector: 'app-apart-detail',
  templateUrl: './apart-detail.component.html',
  styleUrls: ['./apart-detail.component.scss'],
})
export class ApartDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  apart: Apart;
  id: string;
  slides: SlideItem[];

  constructor(
    private sliderService: SliderService,
    private apartsService: ApartsService,
    private featuredAppartsService: FeaturedAppartsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.apartsService.showHeaderBottomBorder.next(false);
    this.id = this.route.snapshot.paramMap.get('id');
    this.apartsService
      .getApart(this.id)
      .pipe(
        map((apart: any) => {
          apart.images = apart.images.map((item, i) => {
            const directory = item.replace(/-[0-9].[a-z]{3}$/, '');
            return {
              id: i,
              src: 'assets/media/gallery/' + directory + '/' + item,
            };
          });
          // prepare coordinates
          const coordinates = apart.location.split(',');
          apart.location = { lat: coordinates[0], lng: coordinates[1] };
          apart.address = apart.address.split(',');
          // prepare external, internal and conditions
          apart.external = apart.external.split(',');
          apart.internal = apart.internal.split(',');
          apart.conditions = apart.conditions.split(',');
          return apart;
        })
      )
      .subscribe((apart) => {
        this.apart = apart;
      });

    this.slides = this.sliderService.getSlides(
      FeaturedAppartsComponent,
      this.featuredAppartsService.getFeaturedApparts()
    );
  }

  ngOnDestroy() {
    this.apartsService.showHeaderBottomBorder.next(true);
  }

  ngAfterViewInit() {
    this.apartsService.incrementViewCount(this.id).subscribe((response) => {});
  }
}
