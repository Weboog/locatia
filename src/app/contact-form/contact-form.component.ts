import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      message: new FormControl(null),
    });
  }

}
