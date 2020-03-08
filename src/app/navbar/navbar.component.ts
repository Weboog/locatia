import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  favCount = 13;

  @Output() onClose = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  close() {
    this.onClose.emit();
  }
}
