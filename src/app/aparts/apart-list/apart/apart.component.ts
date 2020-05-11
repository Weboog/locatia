import {Component, Input, OnInit} from '@angular/core';
import {Apart} from '../../../shared/custom-types/apart';
import {ActivatedRoute, Router} from '@angular/router';
import {FavouriteService} from '../../../favourite/favourite.service';


@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.scss']
})
export class ApartComponent implements OnInit {

  detailed = false;
  favourite = false;
  scrollY = 0;
  @Input() apart: Apart;
  @Input() carouselId: number;
  constructor( private router: Router, private route: ActivatedRoute, private favouriteService: FavouriteService) { }

  ngOnInit(): void {

    if (this.favouriteService.getRegistered()) {
      if (this.favouriteService.getRegistered(this.apart.id)) {
        this.favourite = true;
      }
    }

  }

  private adaptImages(detailed: boolean) {
    const gallery = document.querySelector(`#id-${this.carouselId}`) as HTMLDivElement;
    const mLeft = +gallery.style.marginLeft.replace('vw', '');
    if (detailed) {
      gallery.style.marginLeft = `${mLeft + (15 * mLeft / 85)}vw`;
      for (let i = 0; i < gallery.children.length; i++) {
        gallery.children.item(i).setAttribute('style', 'width: 100vw');
      }
    } else {
      gallery.style.marginLeft = `${mLeft - (15 * mLeft / 100)}vw`;
      for (let i = 0; i < gallery.children.length; i++) {
        gallery.children.item(i).setAttribute('style', 'width: 85vw');
      }
    }
  }

  onFavourite(id: string) {
    this.favourite = !this.favourite;
    this.favouriteService.registerApart(id);
  }

  onDescription(id: number) {
    this.router.navigate([`aparts/${id}`]);
    /*this.detailed = !this.detailed;
    this.adaptImages(this.detailed);
    if (this.detailed) {
      this.scrollY = window.scrollY;
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, this.scrollY);
    }*/
  }

  onCall(e: Event) {
    e.stopPropagation();
  }

}
