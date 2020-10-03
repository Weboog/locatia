import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-local-options',
  templateUrl: './local-options.component.html',
  styleUrls: ['./local-options.component.scss']
})
export class LocalOptionsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onClickFilters() {
    this.sharedService.showFilters.next(true);
  }

  onClickSorting() {
    this.sharedService.showSorting.next(true);
  }

}
