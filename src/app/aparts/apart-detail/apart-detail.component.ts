import { Component, OnInit } from '@angular/core';
import {ApartsService} from '../aparts.service';
import {Apart} from '../../shared/custom-types/apart';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apart-detail',
  templateUrl: './apart-detail.component.html',
  styleUrls: ['./apart-detail.component.scss']
})
export class ApartDetailComponent implements OnInit {

  apart: Apart;
  constructor( private apartsService: ApartsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apart = this.apartsService.getApart(id);
  }

}
