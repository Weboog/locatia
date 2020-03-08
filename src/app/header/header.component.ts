import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showMenu = new EventEmitter<null>();
  constructor() { }

  ngOnInit() {
  }

  onShowMenu(){
    this.showMenu.emit();
  }

  private

}
