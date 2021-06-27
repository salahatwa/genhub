import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularPostComponent } from "./popular-post/popular-post.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { TagsListComponent } from "./tags-list/tags-list.component";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    PopularPostComponent,
    CategoryListComponent,
    TagsListComponent,
    SidebarComponent,
  ],
  exports: [
    PopularPostComponent,
    CategoryListComponent,
    TagsListComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
})
export class SidebarModule {}
