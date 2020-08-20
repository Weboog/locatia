<<<<<<< HEAD
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
=======
import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
>>>>>>> cb9f0865b85f320fafa8e3f0b6890c643bb61294

import { SliderDirective } from './slider.directive';
import { SlideItem } from './slide-item';

export interface SliderModel {
  data: any;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  currentSlideIndex = 0;
  @Input() slides: SlideItem[];
  @ViewChild(SliderDirective, { static: true }) slideHost: SliderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    console.log('Slides', this.slides);
    console.log('Current Slide', this.slides[this.currentSlideIndex]);
  }

  loadComponent() {
    // this.slides.forEach((slide, index) => {
    //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    //     slide.component
    //   );

<<<<<<< HEAD
    //   const componentRef = this.slideHost.viewContainerRef.createComponent<
    //     SliderModel
    //   >(componentFactory);
    //   componentRef.instance.data = slide.data;
    // });
=======
      const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(componentFactory);
      componentRef.instance.data = slide.data;
    });
>>>>>>> cb9f0865b85f320fafa8e3f0b6890c643bb61294

    const slideItem = this.slides[this.currentSlideIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(slideItem.component);

    // const viewContainerRef = this.slideHost.viewContainerRef;
    // viewContainerRef.clear();

    const componentRef = this.slideHost.viewContainerRef.createComponent<SliderModel>(componentFactory);
    componentRef.instance.data = slideItem.data;
  }

  public onPreviousClick() {
    const previous = this.currentSlideIndex - 1;
    this.currentSlideIndex = previous < 0 ? this.slides.length - 1 : previous;
    this.slideHost.viewContainerRef.clear();
    this.loadComponent();
  }

  public onNextClick() {
    this.slideHost.viewContainerRef.clear();
    this.loadComponent();
  }
}
