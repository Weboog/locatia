import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomSelectService, SelectOption} from '../shared/custom-select/custom-select.service';
import {ApartsService} from '../aparts/aparts.service';
import {Apart} from '../shared/custom-types/apart';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  apartsArray: Apart[] = [];
  selectArray: SelectOption[];
  filterReducedForm: FormGroup;
  getListedform: FormGroup;
  constructor( private customSelectService: CustomSelectService, private apartsService: ApartsService) { }

  ngOnInit(): void {
    this.apartsArray = this.apartsService.getFeatured();
    this.selectArray = this.customSelectService.getSelectOptions();
    this.filterReducedForm = new FormGroup({
      action: new FormControl(null),
      city: new FormControl(null),
      type: new FormControl(null)
    });

    this.getListedform = new FormGroup({
      email: new FormControl(null, [Validators.email])
    });
  }

  assignValue(control: {label: string, value: string}) {
    this.filterReducedForm.controls[control.label].setValue(control.value);
  }

  onSubmit() {
    console.log(this.filterReducedForm.value);
    this.filterReducedForm.reset();
    this.customSelectService.onReset.next();
  }

  onGetListed() {
    console.log(this.getListedform.value);
  }

}
