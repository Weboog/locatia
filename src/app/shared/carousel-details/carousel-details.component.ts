import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

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
    slideWidth: number;
    itemWidth: number;
    step: number;
    i = 0; // start item

    constructor() {}

    ngOnInit(): void {
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

}
