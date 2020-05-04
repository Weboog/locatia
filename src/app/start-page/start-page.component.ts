import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomSelectService, SelectOption} from '../shared/custom-select/custom-select.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  selectArray: SelectOption[];
  filterReducedForm: FormGroup;
  constructor( private customSelectService: CustomSelectService) { }

  ngOnInit(): void {
    this.selectArray = this.customSelectService.getSelectOptions();
    this.filterReducedForm = new FormGroup({
      action: new FormControl('rent'),
      city: new FormControl('all'),
      type: new FormControl('appart')
    });
  }

  assignValue(control: {label: string, value: string}) {
    this.filterReducedForm.controls[control.label].setValue(control.value);
  }

  onSubmit() {
    console.log(this.filterReducedForm.value);
  }


}
