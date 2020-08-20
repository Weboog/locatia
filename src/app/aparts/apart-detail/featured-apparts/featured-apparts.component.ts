import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-featured-apparts",
  templateUrl: "./featured-apparts.component.html",
  styleUrls: ["./featured-apparts.component.scss"],
})
export class FeaturedAppartsComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
