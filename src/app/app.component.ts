import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DummyComponent} from './dummy/dummy.component';
import {PlaceholderDirective} from './shared/placeholder/placeholder.directive';
import {Subscription} from 'rxjs';
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  expandMenu = false;
  filtersShown = false;
  sortingShown = false;
  @ViewChild(PlaceholderDirective, {static: false}) dummyHost: PlaceholderDirective;
  dummySubscription: Subscription;
  constructor(private cpFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.showFilters.subscribe(bool => {
      this.filtersShown = bool;
    });
    this.sharedService.showSorting.subscribe(bool => {
      this.sortingShown = bool;
    });
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
