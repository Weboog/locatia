import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomSelectService, SelectOption} from '../shared/custom-select/custom-select.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {price} from '../custom-validators/price.validator';
import {surface} from '../custom-validators/surface.validator';
import {SwitchService} from '../shared/switch/switch.service';
import {Switch} from '../shared/custom-types/switch';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  pieces: any = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
  ];

  @Input() slideUp = false;
  @Output() onCancel = new EventEmitter<null>();
  selectArray: SelectOption[];
  switchArray: Switch[];
  formFilters: FormGroup;
  constructor( private customSelectService: CustomSelectService, private switchService: SwitchService) { }

  ngOnInit(): void {
    this.selectArray = this.customSelectService.getSelectOptions();
    this.switchArray = this.switchService.getSwitches();
    this.formFilters = new FormGroup({
      action: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      price: new FormGroup({
        minPrice: new FormControl(null, Validators.pattern(/^[0-9]{3,7}$/)),
        maxPrice: new FormControl(null, Validators.pattern(/^[0-9]{3,7}$/))
      }, price),
      surface: new FormGroup({
        minSurface: new FormControl(null, Validators.pattern(/^[0-9]{2,4}$/)),
        maxSurface: new FormControl(null, Validators.pattern(/^[0-9]{2,4}$/))
      }, surface),
      pieces: new FormArray([], Validators.pattern(/^[1-5]$/)),
      rooms: new FormArray([], Validators.pattern(/^[1-5]$/))
    });
  }

  assignValue(control: {label: string, value: string}) {
    this.formFilters.controls[control.label].setValue(control.value);
  }

  onSubmit() {
    console.log(this.formFilters.value);
  }

  onReset() {
    this.customSelectService.onReset.next();
    const arrays: string[] = ['pieces', 'rooms'];
    arrays.forEach( array => {
      const fa = this.formFilters.get(array)as FormArray;
      while (fa.length !== 0) {
        fa.removeAt(0);
      }
    });
    this.slideUp = false;
    this.onCancel.emit();
  }

  onChange(event, label: string) {
    const piecesArray = this.formFilters.get(label) as FormArray;
    if (event.target.checked) {
      if (piecesArray.length >= 2) {
        event.target.checked = false;
        return;
      }
      piecesArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      piecesArray.controls.forEach( item => {
        if (item.value === event.target.value) {
          piecesArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
