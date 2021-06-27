import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { SharedPostModule } from "../shared/modules/shared-post.module";
import { LazyLoadImageModule } from 'ng-lazyload-image'; 

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedPostModule,
    SidebarModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
