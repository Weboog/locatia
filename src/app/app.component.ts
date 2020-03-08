import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  expandMenu = false;

  onOpenMenu() {
    this.expandMenu = true;
  }

  onCloseMenu() {
    this.expandMenu = false;
  }

  onScroll(event) {
    console.log(event);
  }
}
