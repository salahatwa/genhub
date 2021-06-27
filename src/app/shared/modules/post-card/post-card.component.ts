import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  @Input("postItems") set postItems(posts) {
    this.posts = posts;
  }
  @Input("title") title;

  posts: any;
  constructor() {}

  ngOnInit(): void {}
}
