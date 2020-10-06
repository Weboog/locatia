import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';

import { SliderDirective } from './slider.directive';
import { SlideItem } from './slide-item';
import { trigger, style, transition, animate } from '@angular/animations';

export interface SliderModel {
  data: any;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  currentSlideIndex = 0;
  @Input() slides: SlideItem[];
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
    this.slideHost.viewContainerRef.clear();
    if (window.innerWidth > 875) {
      this.slides.forEach((slide) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          slide.component
        );
        const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(
          componentFactory
        );
        componentRef.instance.data = slide.data;
      });
    } else {
      const slideItem = this.slides[this.currentSlideIndex];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        slideItem.component
      );
      const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(
        componentFactory
      );
      componentRef.instance.data = slideItem.data;
    }
  }

  public onChevronClick(direction: string) {
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
