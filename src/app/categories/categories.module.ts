import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { CategoryListingComponent } from "../categories/category-listing/category-listing.component";
import { RouterModule, Routes } from "@angular/router";
import { CategoryService } from "./shared/category.service";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxPaginationModule } from "ngx-pagination";


const routes: Routes = [
  {
    path: "",
    component: CategoriesComponent,
    children: [
      {
        path: ":catId",
        component: CategoryListingComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [CategoriesComponent, CategoryListingComponent],
  providers: [CategoryService],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule,
    NgxPaginationModule
  ],
})
export class CategoriesModule {}
