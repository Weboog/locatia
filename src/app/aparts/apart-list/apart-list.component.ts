import { Component, OnInit } from '@angular/core';
import { ApartsService } from '../aparts.service';
import { Apart } from '../../shared/custom-types/apart';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-apart-list',
  templateUrl: './apart-list.component.html',
  styleUrls: ['./apart-list.component.scss'],
})
export class ApartListComponent implements OnInit {
  apartsArray: Apart[];
  constructor(private apartsService: ApartsService) {}

  ngOnInit(): void {
    this.apartsService.getAparts().pipe(
      map( (aparts: Apart[]) => {
        aparts.forEach(apart => {
          apart.images = [
            {id: 0, src: apart.id + '-0.jpg'},
            {id: 1, src: apart.id + '-1.jpg'}
          ];
        });
        return aparts;
      })
    ).subscribe((aparts: Apart[]) => {
      this.apartsArray = aparts;
      console.log(this.apartsArray);
    });
  }
}
