import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Carousel} from './carousel';
import {CarouselService} from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  currentItem = 0;
  items: number[] = [];
  @Input() imgSources: Carousel[] = []; // Provided by carousel service
  @Input() id: number;
  buttons = [
    {class: 'button_prev', label: 'prev', direction: 0},
    {class: 'button_next', label: 'next', direction: 1}
  ];

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
    let startX;
    let endX;
    let threshold;
    const step = 50;
    const slider = document.querySelector(`#id-${this.id}`);
    slider.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.changedTouches[0].pageX;
      console.log();
    });
    slider.addEventListener('touchend', (e: TouchEvent) => {
      endX = e.changedTouches[0].pageX;
      threshold = Math.abs(endX - startX);
      if (threshold >= step) {
        if ( endX - startX < 0 ) {
          const controlNextButton = document.querySelector(`#control-${this.id}-1`) as HTMLButtonElement;
          controlNextButton.click();
        } else if (endX - startX > 0) {
          const controlNextButton = document.querySelector(`#control-${this.id}-0`) as HTMLButtonElement;
          controlNextButton.click();
        }
      }
    });
  }

  private insertSlideItem(index: number) {
    const imgSrc = this.imgSources[index].src;
    const sliderItem = document.createElement('div');
    sliderItem.className = 'slider_item';
    sliderItem.style.width = '100vw';
    ////////////////////////////////////////////////////
    const imageObject = new Image();
    imageObject.addEventListener('load', () => {
      sliderItem.appendChild(imageObject);
      (document.querySelector(`#id-${this.id}`) as HTMLDivElement).style.marginLeft = `-${(this.currentItem - 1) * 100}vw`;
    });
    imageObject.alt = `Image-${index}`;
    imageObject.src = imgSrc;
    imageObject.style.width = '100%';
    ////////////////////////////////////////////////////
    document.querySelector(`#id-${this.id}`).appendChild(sliderItem);
  }

  move(event, direction: number) {
    // console.log();
    const slider = event.target.parentNode.previousSibling.firstChild;
    // ******* LAZY LOADING *************//
    if (direction === 1) {
      if (this.currentItem < this.imgSources.length) {
        const safe = this.items.every( (item: number) => {
          return item !== this.imgSources[this.currentItem].id;
        });
        if (safe) {
          this.items.push(this.imgSources[this.currentItem].id);
          this.insertSlideItem(this.currentItem);
          this.currentItem++;
        } else {
          slider.style.marginLeft = `-${(this.currentItem) * 100}vw`;
          this.currentItem++;
        }
      }
    } else if (direction === 0) {
      if (this.currentItem > 1) {
        (document.querySelector(`#id-${this.id}`) as HTMLDivElement).style.marginLeft = `-${(this.currentItem - 2) * 100}vw`;
        this.currentItem--;
      }
    }
  }
}
