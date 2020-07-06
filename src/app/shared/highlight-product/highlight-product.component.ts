import {Component, Input, OnInit} from '@angular/core';
import {Apart} from '../custom-types/apart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-highlight-product',
  templateUrl: './highlight-product.component.html',
  styleUrls: ['./highlight-product.component.scss']
})
export class HighlightProductComponent implements OnInit {

  detailed = false;
  @Input() apart: Apart;
  @Input() carouselId: number;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onDescription(id: number) {
    this.router.navigate([`aparts/${id}`]);
  }

}
