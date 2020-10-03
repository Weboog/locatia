import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';

import { SliderDirective } from './slider.directive';
import { SlideItem } from './slide-item';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface SliderModel {
  data: any;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('directionReverse', [
      state(
        'toLeft',
        style({
          transform: 'translateX(-25rem)',
        })
      ),
      state(
        'toRight',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('toLeft => toRight', [animate('.5s')]),
      transition('toRight => toLeft', [animate('0.5s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  currentSlideIndex = 0;
  itemsPosition: string;
  @Input() slides: SlideItem[];
  @Input() viewWidth: number;
  @Input() itemsPerView: number;
  @ViewChild(SliderDirective, { static: true }) slideHost: SliderDirective;

  isInitial = false;

  toggle() {
    this.isInitial = !this.isInitial;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    console.log(this.slides);
  }

  loadComponent() {
    this.slides.forEach((slide) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        slide.component
      );
      const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(
        componentFactory
      );
      componentRef.instance.data = slide.data;
    });

    // const slideItem = this.slides[this.currentSlideIndex];

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    //   slideItem.component
    // );

    // const viewContainerRef = this.slideHost.viewContainerRef;
    // viewContainerRef.clear();

    // const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(
    //   componentFactory
    // );
    // componentRef.instance.data = slideItem.data;
  }

  public onChevronClick(direction: string) {
    this.itemsPosition = direction;
    if (direction === 'next') {
      const next = this.currentSlideIndex + 1;
      this.currentSlideIndex = next === this.slides.length ? 0 : next;
      this.loadComponent();
    }
    if (direction === 'prev') {
      const previous = this.currentSlideIndex - 1;
      this.currentSlideIndex = previous < 0 ? this.slides.length - 1 : previous;
      this.loadComponent();
    }
    console.log(`Current Slide Index: ${this.currentSlideIndex} (${direction})`);
  }
}
