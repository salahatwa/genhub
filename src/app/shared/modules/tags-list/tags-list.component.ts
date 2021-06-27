import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tags-list",
  templateUrl: "./tags-list.component.html",
  styleUrls: ["./tags-list.component.scss"],
})
export class TagsListComponent implements OnInit {
  constructor() {}

  @Input("tagsList") set tagsList(data) {
    this.tags = data;
  }
  tags: any;

  ngOnInit(): void {}
}
