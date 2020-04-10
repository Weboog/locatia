import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DummyComponent} from './dummy/dummy.component';
import {PlaceholderDirective} from './shared/placeholder/placeholder.directive';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  expandMenu = false;
  filtersShown = false;
  @ViewChild(PlaceholderDirective, {static: false}) dummyHost: PlaceholderDirective;
  dummySubscription: Subscription;
  constructor(private cpFactoryResolver: ComponentFactoryResolver) {
  }

  onOpenMenu() {
    this.expandMenu = true;
  }

  onCloseMenu() {
    this.expandMenu = false;
  }

  // =============================================================================================
  createComponent() {
    const dummyComponentFactory = this.cpFactoryResolver.resolveComponentFactory(DummyComponent);
    const vcRef = this.dummyHost.viewContainerRef;
    vcRef.clear();
    const componentRef = vcRef.createComponent(dummyComponentFactory);
    this.dummySubscription = componentRef.instance.closeDummy.subscribe( () => {
      this.dummySubscription.unsubscribe();
      vcRef.clear();
    });
  }
  // =============================================================================================
}
