import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private localStorageService: LocalStorageService
  ) {}
  featuredPosts: any = [];
  categories: any = [];
  tagsList: any = [];

  // defaultImage = "https://via.placeholder.com/400x200.png?text=Tutscoder";
  defaultImage = "./assets/images/400x200.png";

  ngOnInit() {
    this.getFeaturedPosts();
    this.getAllCategory();
    this.getAllTags();
  }
  private getFeaturedPosts() {

    if (this.localStorageService.getLocalStorage("featuredData")) {
      this.featuredPosts = JSON.parse(
        this.localStorageService.getLocalStorage("featuredData")
      );
    } else {
      this.postService.getFeaturedPosts().subscribe((response) => {
        this.featuredPosts = response;
        this.localStorageService.setLocalStorage(
          "featuredData",
          JSON.stringify(response)
        );
      });
    }

  }

  private getAllCategory() {
    if (this.localStorageService.getLocalStorage("categories")) {
      this.categories = JSON.parse(
        this.localStorageService.getLocalStorage("categories")
      );
    } else {
      this.categoryService.getAllCateogry().subscribe((data) => {
        this.categories = data;
        this.localStorageService.setLocalStorage(
          "categories",
          JSON.stringify(data)
        );
      });
    }
  }

  private getAllTags() {
    if (this.localStorageService.getLocalStorage("tags")) {
      this.tagsList = JSON.parse(
        this.localStorageService.getLocalStorage("tags")
      );
    } else {
      this.categoryService.getAllTags().subscribe((response) => {
        this.tagsList = response["data"]["tags"];
        this.localStorageService.setLocalStorage(
          "tags",
          JSON.stringify(response["data"]["tags"])
        );
      });
    }
  }
}
