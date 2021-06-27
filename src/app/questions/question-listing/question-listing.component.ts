import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { SeoService } from "src/app/shared/services/seo.service";
import { QuestionService } from "../shared/question.service";

@Component({
  selector: "app-question-listing",
  templateUrl: "./question-listing.component.html",
  styleUrls: ["./question-listing.component.scss"],
})
export class QuestionListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private seoService: SeoService
  ) {}

  posts: any;
  category: string;
  categories: any;
  tagsList:any = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      //this.seoService.updateTitle(`${this.category} | TutsCoder`);
      this.getQuestionByCategory();
      this.getAllCategory();
      this.getAllTags();
    });
  }

  private getQuestionByCategory() {
    this.questionService
      .getQuestionByCategory(this.category)
      .subscribe((response) => {
        this.posts = response;
      });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }
}
