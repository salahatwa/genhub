import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnippetsComponent } from "./snippets.component";
import { RouterModule, Routes } from "@angular/router";
import { SnippetDetailComponent } from "./snippet-detail/snippet-detail.component";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { SnippetListingComponent } from "./snippet-listing/snippet-listing.component";
import { SharedPostModule } from "../shared/modules/shared-post.module";

const routes: Routes = [
  {
    path: "",
    component: SnippetsComponent,
    children: [
      
      {
        path: ":category",
        component: SnippetListingComponent,
      },
      {
        path: ":category/:slug",
        component: SnippetDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    SnippetsComponent,
    SnippetDetailComponent,
    SnippetListingComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    SharedPostModule,
    RouterModule.forChild(routes),
  ],
})
export class SnippetsModule {}
