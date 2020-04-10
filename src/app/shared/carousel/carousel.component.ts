import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Carousel} from './carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  currentItem = 0;
  items: number[] = []; // Contain already loaded images to prevent reloading
  isLoading = false;
  step = 85;
  @Input() onDetails: boolean;
  @Input() imgSources: Carousel[] = []; // Provided by carousel service
  @Input() id: number;
  buttons = [
    {class: 'button_prev', label: 'prev', direction: 0},
    {class: 'button_next', label: 'next', direction: 1}
  ];

  // Contains the whole css needed to style new created html element
  private placeHolderCreator(gallery: HTMLDivElement, index: number, currentItem: number) {
    this.step = this.onDetails ? 100 : 85;
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
    gallery.style.marginLeft = `-${(currentItem) * this.step}vw`;
  }

  ngOnInit(): void {
    this.initCarousel();
  }

  ngAfterViewInit(): void {
    this.handleSliderTouch();
  }

  private initCarousel() {
    this.items.push(this.imgSources[this.currentItem].id);
    this.currentItem = 1;
  }

  private handleSliderTouch() {
    // tslint:disable-next-line:one-variable-per-declaration
    let startX, endX, threshold;
    const step = 50;
    const slider = document.querySelector(`#id-${this.id}`);
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
          (document.querySelector(`#control-${this.id}-1`) as HTMLButtonElement).click();
        } else if (endX - startX > 0) {
          (document.querySelector(`#control-${this.id}-0`) as HTMLButtonElement).click();
        }
      }
    });
  }

  private insertSlideItem(index: number) {
    this.step = this.onDetails ? 100 : 85;
    const gallery = document.querySelector(`#id-${this.id}`) as HTMLDivElement;
    const imgSrc = this.imgSources[index].src;
    ////////////////////////////////////////////////////
    this.placeHolderCreator(gallery, index, this.currentItem);
    ////////////////////////////////////////////////////
    const sliderItem = document.createElement('div');
    sliderItem.className = 'slider_item';
    sliderItem.style.width = `${this.step}vw`;
    ////////////////////////////////////////////////////
    const imageObject = new Image();
    imageObject.addEventListener('load', () => {
      gallery.children.item(index).remove();
      sliderItem.appendChild(imageObject);
      gallery.appendChild(sliderItem);
      this.isLoading = false;
    });
    imageObject.alt = `Image-${index}`;
    imageObject.src = imgSrc;
    imageObject.style.width = '100%';
  }

  move(event, direction: number) {
    this.step = this.onDetails ? 100 : 85;
    const slider = event.target.parentNode.previousSibling.firstChild;
    // ******* LAZY LOADING *************//
    if (direction === 1 && !this.isLoading) {
      if (this.currentItem < this.imgSources.length) {
        const safe = this.items.every( (item: number) => {
          return item !== this.imgSources[this.currentItem].id;
        });
        if (safe) {
          this.isLoading = true;
          this.items.push(this.imgSources[this.currentItem].id);
          this.insertSlideItem(this.currentItem);
          this.currentItem++;
        } else {
          slider.style.marginLeft = `-${(this.currentItem) * this.step}vw`;
          this.currentItem++;
        }
      }
    } else if (direction === 0) {
      if (this.currentItem > 1) {
        (document.querySelector(`#id-${this.id}`) as HTMLDivElement).style.marginLeft = `-${(this.currentItem - 2) * this.step}vw`;
        this.currentItem--;
      }
    }
  }
}
