import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomSelectService, SelectOption} from '../custom-select/custom-select.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  @Input() slideUp = false;
  @Output() onCancel = new EventEmitter<null>();
  selectArray: SelectOption[];
  formFilters: FormGroup;

  constructor( private customSelectService: CustomSelectService) { }

  ngOnInit(): void {
    this.selectArray = this.customSelectService.getSelectOptions();
    this.formFilters = new FormGroup({
      sort: new FormControl(null)
    });
  }

  assignValue(val) {
    this.formFilters.get('sort').setValue(val);
  }

  onSubmit() {
    console.log(this.formFilters.value);
  }

  onReset() {
    this.customSelectService.onReset.next();
    this.slideUp = false;
    this.onCancel.emit();
  }

}
