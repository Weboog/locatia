import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
      action: new FormControl('rent'),
      city: new FormControl('all'),
      type: new FormControl('all')
    });

    this.getListedform = new FormGroup({
      email: new FormControl(null, [Validators.email])
    });
  }

  assignValue(control: {label: string, value: string | string[]}) {
    this.filterReducedForm.controls[control.label].setValue(control.value);
  }

  onSubmit() {
    console.log(this.filterReducedForm.value);
  }

  onGetListed() {
    console.log(this.getListedform.value);
  }

}
