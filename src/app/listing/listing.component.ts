import { Component, OnInit } from '@angular/core';
import { Apart } from '../shared/custom-types/apart';
import { ApartsService } from '../aparts/aparts.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  apartItems: Apart[];
  constructor(private apartsService: ApartsService) {}

  ngOnInit(): void {
    // this.apartItems = this.apartsService.getAparts();
  }
}
