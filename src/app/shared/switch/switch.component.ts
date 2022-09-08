import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {Switch} from '../custom-types/switch';
import {SwitchService} from './switch.service';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor(private switchService: SwitchService) { }

  @Input() bgColor: string;
  @Input() switchValues: Switch;
  @Output() onSwitch = new EventEmitter<{label: string, value: string}>();
  checkedIndex = 0;

  ngOnInit(): void {
    this.switchService.setChecked(this.checkedIndex);
  }

  onChange(val: string) {
    this.onSwitch.emit({label: this.switchValues.label, value: val});
  }

}
