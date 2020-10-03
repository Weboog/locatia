import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Switch} from '../custom-types/switch';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() bgColor: string;
  @Input() switchValues: Switch;
  @Output() onSwitch = new EventEmitter<{label: string, value: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(val: string) {
    this.onSwitch.emit({label: this.switchValues.label, value: val});
  }

}
