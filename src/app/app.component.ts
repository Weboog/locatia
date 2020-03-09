import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  expandMenu = false;
  filtersShown = false;

  onOpenMenu() {
    this.expandMenu = true;
  }

  onCloseMenu() {
    this.expandMenu = false;
  }
}
