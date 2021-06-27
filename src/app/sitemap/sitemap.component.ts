import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/shared/post.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html'
})
export class SitemapComponent implements OnInit {

  constructor(
    private postService : PostService
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  posts:any = [];

  private getAllPost() {
    let reqData = {
      limit: 100,
      page: 1,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      
      this.posts = response["data"];
      
    },error=>{
      console.log(error);
    });
  }


}
