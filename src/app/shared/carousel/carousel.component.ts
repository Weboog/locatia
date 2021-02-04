import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Carousel} from './carousel';
import {GlobalContants} from '../../common/global-contants';
import {Apart} from '../custom-types/apart';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() onDetails: boolean;
  @Input() apartId: string;
  @Input() carouselId: number; // Unique id for each gallery on listing
  @Input() imgSources: Carousel[] = [];

  galleryPath = '';
  currentItem = 0;
  items: number[] = []; // Contain already loaded images to prevent reloading
  isLoading = false;
  step = 100;

  buttons = [
    {class: 'button_prev', label: 'Précédente', direction: 0},
    {class: 'button_next', label: 'Suivante', direction: 1}
  ];

  // Contains the whole css needed to style new created html element

  ngOnInit(): void {
    // window.matchMedia('(min-width: 1024px)').matches ? this.step = 85 : this.step = 100;
    this.galleryPath = GlobalContants.gallery.remote + 'assets/media/gallery/' + this.apartId;
    this.initCarousel();
  }

  ngAfterViewInit(): void {
    this.handleSliderTouch();
  }

  move(event, direction: number) {
    this.step = this.onDetails ? this.step : 85;
    const sibling = event.target.previousSibling; // We get correspondant slider
    let slider;
    if (sibling.className === 'slide') {
      slider = sibling.firstChild;
    } else if (sibling.className === 'button_prev') {
      slider = sibling.previousSibling.firstChild;
    }
    // ******* LAZY LOADING *************//
    if (direction === 1 && !this.isLoading) {
      if (this.currentItem < this.imgSources.length) {
        const safe = this.items.every( (item: number) => {
          // @ts-ignore
          return item !== this.imgSources[this.currentItem].id;
        });
        if (safe) {
          this.isLoading = true;
          this.items.push(+this.imgSources[this.currentItem].id);
          this.insertSlideItem(this.currentItem);
          this.currentItem++;
        } else {
          slider.style.marginLeft = `-${(this.currentItem) * this.step}vw`; // or 85 / 2 of moving step
          this.currentItem++;
        }
      }
    } else if (direction === 0) {
      if (this.currentItem > 1) {
        (document.querySelector(`#id-${this.carouselId}`) as HTMLDivElement).style.marginLeft = `-${(this.currentItem - 2) * this.step}vw`;
        this.currentItem--;
      }
    }
  }

  preventDispatch(event: Event, direction: number) {
    event.preventDefault();
    event.stopPropagation();
    (document.querySelector(`#control-${this.carouselId}-${direction}`) as HTMLButtonElement).click();
    return false;
  }

  private initCarousel() {
    // console.log(this.galleryPath + '/' + this.imgSources[0].src);
    this.items.push(this.imgSources[this.currentItem].id, this.imgSources[this.currentItem + 1].id);
    this.currentItem = 1;
  }

  private handleSliderTouch() {
    // tslint:disable-next-line:one-variable-per-declaration
    let startX, endX, threshold;
    const step = 50;
    const slider = document.querySelector(`#id-${this.carouselId}`);
    slider.addEventListener('touchstart', (e: TouchEvent) => {
      e.preventDefault();
      startX = e.changedTouches[0].pageX;
    });
    slider.addEventListener('touchend', (e: TouchEvent) => {
      e.preventDefault();
      endX = e.changedTouches[0].pageX;
      threshold = Math.abs(endX - startX);
      if (threshold >= step) {
        if ( endX - startX < 0) {
          (document.querySelector(`#control-${this.carouselId}-1`) as HTMLButtonElement).click();
        } else if (endX - startX > 0) {
          (document.querySelector(`#control-${this.carouselId}-0`) as HTMLButtonElement).click();
        }
      }
    });
  }

  private insertSlideItem(currentItem: number) {
    this.step = this.onDetails ? this.step : 85;
    let imgWidth;
    if (window.matchMedia('(min-width: 1024px)').matches) {
      imgWidth = (85 * 50 / 100).toString() + '%'; // to set image dimension to be the half of the gallery
    } else {
      imgWidth = '100%';
    }
    const gallery = document.querySelector(`#id-${this.carouselId}`) as HTMLDivElement;
    const imgSrc = this.galleryPath + '/' + this.imgSources[currentItem].src;
    ////////////////////////////////////////////////////
    this.placeHolderCreator(gallery, currentItem);
    ////////////////////////////////////////////////////
    const sliderItem = document.createElement('div');
    sliderItem.className = 'slider_item';
    sliderItem.style.width = `${this.step}vw`; // slider_item has same width like step
    ////////////////////////////////////////////////////
    const imageObject = new Image();
    imageObject.addEventListener('load', () => {
      gallery.children.item(currentItem).remove();
      sliderItem.appendChild(imageObject);
      gallery.appendChild(sliderItem);
      this.isLoading = false;
    });
    imageObject.alt = `Image-${currentItem}`;
    imageObject.src = imgSrc;
    imageObject.style.width = imgWidth;
  }

  private placeHolderCreator(gallery: HTMLDivElement, currentItem: number) {
    // this.step = this.onDetails ? this.step : 85;
    // PROGRAMMATIC HTML -----------------------------------
    const sliderPlaceHolder = document.createElement('div');
    sliderPlaceHolder.innerText = `CHARGEMENT D\'IMAGE...`;
    const slideHolderStyle =  sliderPlaceHolder.style;
    // CSS -------------------------------------------------
    slideHolderStyle.fontFamily = 'Montserrat, sans-serif';
    slideHolderStyle.fontWeight = '600';
    slideHolderStyle.fontSize = '.9rem';
    slideHolderStyle.color = '#888';
    slideHolderStyle.background = 'lightgrey url("assets/svg/loading.svg") no-repeat';
    slideHolderStyle.backgroundPosition = 'center 4rem';
    slideHolderStyle.backgroundSize = '20%';
    slideHolderStyle.width = `${this.step}vw`;
    slideHolderStyle.display = 'flex';
    slideHolderStyle.justifyContent = 'center';
    slideHolderStyle.alignItems = 'center';
    // ADDING ELEMENTS TO VIEW -----------------------------
    gallery.append(sliderPlaceHolder);
    gallery.style.marginLeft = `-${(currentItem) * this.step}vw`; // or 85 / 2 of moving step
  }


}
