import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { AdsenseModule } from "ng2-adsense";
import { PostsComponent } from "./posts.component";
import { PostListingComponent } from "./post-listing/post-listing.component";
import { RouterModule, Routes } from "@angular/router";
import { PostService } from "./shared/post.service";
import { PostDetailComponent } from "./post-detail/post-detail.component";

import { SharedPostModule } from "../shared/modules/shared-post.module";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { ShareButtonsConfig } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
import {NgxPaginationModule} from 'ngx-pagination';

const customConfig: ShareButtonsConfig = {
  include: ['facebook', 'twitter', 'pinterest','whatsapp','tumblr','reddit','telegram','email'],
  twitterAccount: 'tutscoder'
}

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
    children: [
      {
        path: "",
        component: PostListingComponent,
      },
      {
        path: ":slug",
        component: PostDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [PostsComponent, PostListingComponent, PostDetailComponent],
  providers: [PostService],
  imports: [
    CommonModule,
    FormsModule,
    // AdsenseModule.forRoot(),
    LazyLoadImageModule,
    NgxPaginationModule,
    ShareButtonsModule.withConfig(customConfig),
    ShareIconsModule,
    SharedPostModule,
    SidebarModule,
    RouterModule.forChild(routes),
  ],
})
export class PostsModule {}
