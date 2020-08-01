import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-carousel-details',
    templateUrl: './carousel-details.component.html',
    styleUrls: ['./carousel-details.component.scss']
})
export class CarouselDetailsComponent implements OnInit, AfterViewInit {

    @ViewChild('slider', {static: false}) slider: ElementRef;
    @Input() elemArray: any[]; // Elements to be displayed in carousel
    @Input() viewWidth: number; // step of slide is calculated in vw
    @Input() itemsPerView: number;
    @Input() stepPerView: boolean;
    id: string;
    loadedItems = [];
    step: number;
    slideWidth: number;
    itemWidth: number;
    i = 0; // start item

    constructor( private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        this.id = paramMap.get('id');
      });
      this.loadedItems.push(0, 1);
      this.step = this.stepPerView ? this.viewWidth : this.viewWidth / this.itemsPerView;
      this.slideWidth = this.viewWidth; // the width of screen's slide is equal to the step
      this.itemWidth = this.slideWidth / this.itemsPerView; // we get item width from dividing screen width by number of wanted items
    }

    ngAfterViewInit(): void {
        this.slider.nativeElement.parentNode.style.width = `${this.slideWidth}vw`; // Resize slide
        this.slider.nativeElement.style.width = `${this.itemWidth * this.elemArray.length}vw`; // resize slider to be bigger or smaller
        for (const item of this.slider.nativeElement.children) {
            item.style.width = `${this.itemWidth}vw`; // assigning right width to each element to fit slide scope
        }
        if (this.stepPerView) {
            // Removing padding left of element an+1 and an+a
            const leftElements = document.querySelectorAll(`.slider_item:nth-child(${this.itemsPerView}n+1)`);
            const rightElements = document.querySelectorAll(`.slider_item:nth-child(${this.itemsPerView}n+${this.itemsPerView})`);

            leftElements.forEach((elem: HTMLDivElement) => {
                elem.style.paddingLeft = String(0);
            });
            rightElements.forEach((elem: HTMLDivElement) => {
                elem.style.paddingRight = String(0);
            });
        } else {

        }
    }

    move(direction: string) {
        const slider = this.slider.nativeElement;
        let length = this.elemArray.length / this.itemsPerView;
        if (!this.stepPerView) {
            if (this.itemsPerView > 1) {
                 length = this.elemArray.length - ( this.itemsPerView - 1 );
            }
        }
        while (this.i < length) {
            switch (direction) {
                case 'right':
                    if (this.i + 1 < length) {
                        this.i++;
                        if (!this.loadedItems.includes(this.i + 1)) {
                          this.sliderItemCreator(slider, this.i);
                        }
                        // Remember loaded items
                        this.loadedItems.push(this.i + 1);
                    }
                    slider.style.marginLeft = `calc( -${this.step}vw * ${this.i})`;
                    break;
                case 'left':
                    if (this.i - 1 >= 0) {
                        this.i--;
                    }
                    slider.style.marginLeft = `calc( -${this.step}vw * ${this.i})`;
            }
            break;
        }
    }

  private sliderItemCreator(hostElement: HTMLDivElement, currentItem: number) {
    // PROGRAMMATIC HTML -----------------------------------
      const sliderItem = document.createElement('div');
      // Styling the placeholder dynamically
      sliderItem.className = 'slider_item';
      sliderItem.style.width = `${this.itemWidth}vw`;
      sliderItem.style.padding = ' 0 0.5rem';
      sliderItem.style.display = 'flex';
      sliderItem.style.justifyContent = 'center';
      sliderItem.style.alignItems = 'center';
      sliderItem.style.backgroundColor = '#FAFAFA';
      sliderItem.style.backgroundClip = 'content-box';
      sliderItem.innerHTML = `<div style="border-radius: 2rem; overflow: hidden;"><img src="assets/loaders/15.gif"><</div>`;
      // Calling lazyLoading function to load and append image to sliderPlaceHolder
      this.lazyLoadImage(sliderItem, currentItem);
    // ADDING ELEMENTS TO VIEW -----------------------------
      hostElement.append(sliderItem);
  }

  private lazyLoadImage(hostElement: HTMLDivElement, currentItem: number) {
    const imageObject = new Image();
    const imgSrc = `assets/media/gallery/${this.id}/${this.id}-${currentItem + 1}.jpg`;
    imageObject.addEventListener('load', () => {
      // this.isLoading = false;
      hostElement.appendChild(imageObject);
    });
    imageObject.alt = `Image-${currentItem + 1}`;
    imageObject.src = imgSrc;
    imageObject.style.alignSelf = 'flex-start';
    imageObject.style.width = '100%';
  }

}
