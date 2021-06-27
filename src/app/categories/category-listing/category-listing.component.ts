import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommanService } from "src/app/shared/services/comman.service";
import { SeoService } from "src/app/shared/services/seo.service";
import { CategoryService } from "../shared/category.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { combineLatest } from "rxjs/internal/observable/combineLatest";

@Component({
  selector: "app-category-listing",
  templateUrl: "./category-listing.component.html",
  styleUrls: ["./category-listing.component.scss"],
})
export class CategoryListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private seoService: SeoService,
    private commanService: CommanService,
    private ngxService: NgxUiLoaderService
  ) {}
  posts: any;
  category: string;
  categories: any;
  firstPost: any;
  tagsList: any = [];
  page: any = 1;
  limit: any = 5;
  totalPage: any;
  totalItem:any;
  isLoaded: boolean = false;
  // defaultImage = "https://via.placeholder.com/700x400.png?text=Tutscoder";
  defaultImage = "./assets/images/700x400.png";

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      ([pathParams, queryParams]) => {
        
        this.category = pathParams.get("catId");

        this.seoService.setMetaTags({
          title: `${this.commanService.capitalizeFirstLetter(
            this.category
          )} | TutsCoder`,
        });

        this.page = queryParams.get("page") ? +queryParams.get("page") : 1;

        this.getPostByCategory();
        this.getAllCategory();
        this.getAllTags();
      }
    );
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }

  private getPostByCategory() {
    let reqData = {
      category: this.category,
      limit: "5",
      page: this.page,
    };
    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      this.posts = response["data"];
      this.firstPost = this.posts[0];
      this.totalPage = response["totalPages"];
      this.totalItem = response["total"];
      this.isLoaded = true;
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
      
    });
  }

  prevNextPosts(type) {
    this.page = type == "next" ? this.page + 1 : this.page - 1;

    this.router.navigate([`/category/${this.category}`], {
      queryParams: { page: this.page },
    });
  }
  onTableDataChange(event){
    this.page = event;
    
    this.router.navigate([`/category/${this.category}`], {
      queryParams: { page: this.page },
    });
    
  }  

}
