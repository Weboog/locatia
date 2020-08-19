import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  CustomSelectService,
  SelectOption,
} from "../shared/custom-select/custom-select.service";
import { ApartsService } from "../aparts/aparts.service";
import { StartPageService } from "./start-page.service";
import { FeaturedAppartsService } from "../aparts/apart-detail/featured-apparts/featured-apparts.service";

@Component({
  selector: "app-start-page",
  templateUrl: "./start-page.component.html",
  styleUrls: ["./start-page.component.scss"],
})
export class StartPageComponent implements OnInit {
  destinations: string[];
  apartsArray: any = [];
  selectArray: SelectOption[];
  filterReducedForm: FormGroup;
  getListedform: FormGroup;
  constructor(
    private customSelectService: CustomSelectService,
    private apartsService: ApartsService,
    private featuredAppartsService: FeaturedAppartsService,
    private startPageService: StartPageService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.destinations = this.startPageService.getDestinations();
    this.apartsArray = this.featuredAppartsService.getFeaturedApparts();
    this.selectArray = this.customSelectService.getSelectOptions();
    this.filterReducedForm = new FormGroup({
      action: new FormControl("rent"),
      city: new FormControl("all"),
      type: new FormControl("all"),
    });

    this.getListedform = new FormGroup({
      email: new FormControl(null, [Validators.email]),
    });
  }

  assignValue(control: { label: string; value: string | string[] }) {
    this.filterReducedForm.controls[control.label].setValue(control.value);
  }

  onSubmit() {
    console.log(this.filterReducedForm.value);
  }

  onGetListed() {
    console.log(this.getListedform.value);
  }
}
