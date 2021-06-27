import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/categories/shared/category.service';
import { HighlightService } from 'src/app/shared/services/highlight.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SnippetService } from '../shared/snippet.service';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetService,
    private highlightService: HighlightService,
    private categoryService: CategoryService,
    private seoService: SeoService
  ) {}
  snippets: any;
  highlighted: boolean = false;
  post:any;
  categories:any;
  tagsList:any;

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
     if (this.post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    } 
  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.snippetService.getSnippetBySlug(params["slug"]).subscribe((post) => {
        this.post = post;
        
        this.seoService.setMetaTags({
          title: `${this.post.title} | TutsCoder`,
          description: `${this.post.metaDescription}`,
        });

        this.getAllCategory();
        this.getAllTags();
      });
    });
  }


 /*  private getPostByCategory() {
    this.categoryService.getPostByCateogry('angular').subscribe((posts) => {
      this.posts = posts;
    });
  } */
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response['data']['tags'];
    });
  }

}
