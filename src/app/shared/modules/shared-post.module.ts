import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostCardComponent } from "./post-card/post-card.component";
import { VerticlePostCardComponent } from "./verticle-post-card/verticle-post-card.component";
import { TwoColPostComponent } from "./two-col-post/two-col-post.component";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    PostCardComponent,
    VerticlePostCardComponent,
    TwoColPostComponent,
  ],
  exports: [PostCardComponent, VerticlePostCardComponent, TwoColPostComponent],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
})
export class SharedPostModule {}
