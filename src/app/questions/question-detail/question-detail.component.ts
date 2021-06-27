import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/categories/shared/category.service';
import { HighlightService } from 'src/app/shared/services/highlight.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private highlightService: HighlightService,
    private categoryService: CategoryService,
    private seoService: SeoService
  ) {}
  questions: any;
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
      this.questionService.getQuestionBySlug(params["slug"]).subscribe((post) => {
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
