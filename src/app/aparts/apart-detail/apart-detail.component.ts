import {Component, OnInit} from '@angular/core';
import {ApartsService} from '../aparts.service';
import {Apart} from '../../shared/custom-types/apart';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-apart-detail',
  templateUrl: './apart-detail.component.html',
  styleUrls: ['./apart-detail.component.scss']
})
export class ApartDetailComponent implements OnInit {

  apart: Apart;
  constructor( private apartsService: ApartsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apartsService.getApart(id)
        .pipe(map((apart: any) => {
            apart.images = apart.images.map((item, i) => {
              const directory = item.replace(/-[0-9].[a-z]{3}$/, '');
              return {id: i, src: 'assets/media/gallery/' + directory + '/' + item};
          });
            const coordinates = apart.location.split(',');
            apart.location = {lat: coordinates[0], lng: coordinates[1]};
            return apart;
        }))
        .subscribe(apart => {
      this.apart = apart;
    });
  }

}
