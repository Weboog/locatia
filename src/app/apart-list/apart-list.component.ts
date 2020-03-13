import { Component, OnInit } from '@angular/core';
import {ApartsService} from './aparts.service';
import {Apart} from '../shared/custom-types/apart';

@Component({
  selector: 'app-apart-list',
  templateUrl: './apart-list.component.html',
  styleUrls: ['./apart-list.component.scss']
})
export class ApartListComponent implements OnInit {

  apartsArray: Apart[];
  constructor(private apartsService: ApartsService) { }

  ngOnInit(): void {
    this.apartsArray = this.apartsService.getAparts();
  }

}
