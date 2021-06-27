import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "../shared/post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.scss"],
})
export class PostListingComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private postService: PostService,
    private categoryService: CategoryService,
    private ngxService: NgxUiLoaderService
  ) {}

  posts: any = [];
  categories: any;
  page: any = 1;
  limit: any = 5;
  firstPost:any
  totalPage:any;
  totalItem:any;
  tagsList:any = [];
  errors:any;
  isLoaded:boolean = false;
  // defaultImage = "https://via.placeholder.com/700x400.png?text=Tutscoder";
  defaultImage = "./assets/images/700x400.png";

  ngOnInit() {
    
    this.getAllCategory();
    this.getAllTags();

    this.activeRoute.queryParams.subscribe(queryParams  =>{
      
      this.page =  queryParams['page'] ? +queryParams['page'] : 1;
      this.getAllPost();

    })

  }

  count = 0;


  onTableDataChange(event){
    this.page = event;
    
    this.route.navigate(['/post'], { queryParams: { page: this.page } });
    

  }  


  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }

  private getAllPost() {
    let reqData = {
      limit: this.limit,
      page: this.page,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      
      this.posts = response["data"];
      this.firstPost = this.posts[0];
      this.totalPage = response['totalPages'];
      this.totalItem = response['total'];
      this.isLoaded = true;
      window.scrollTo(0, 0);
    },error=>{
      this.isLoaded = true;
      
      this.errors = error.error;
    });
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  prevNextPosts(type) {
    
    this.page = (type == "next") ? this.page + 1 : this.page - 1

    this.route.navigate(['/post'], { queryParams: { page: this.page } });
    
  }
}
