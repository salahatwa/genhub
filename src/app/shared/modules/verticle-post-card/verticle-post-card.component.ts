import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-verticle-post-card",
  templateUrl: "./verticle-post-card.component.html",
})
export class VerticlePostCardComponent implements OnInit {
  @Input("posts") posts: any = [];
  @Input("type") type: any;
  @Input("title") title: any;
  // defaultImage = 'https://via.placeholder.com/400x200.png?text=Tutscoder';
  defaultImage = "./assets/images/400x200.png";
  constructor() {}

  ngOnInit(): void {}
}
