import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  //@Input('categories') categories:any;
  @Input("categoriesList") set categoriesList(data) {
   
    this.categories = data;
  }
  categories:any;
  constructor() { }

  ngOnInit(): void {
  }

}
