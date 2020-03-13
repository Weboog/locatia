import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  @Output() closeDummy = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeMe() {
    this.closeDummy.emit();
  }
}
