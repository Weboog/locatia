import {Component, Input, OnInit} from '@angular/core';
import {Apart} from '../../shared/custom-types/apart';

@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.scss']
})
export class ApartComponent implements OnInit {

  @Input() apart: Apart;
  @Input() galleryId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
