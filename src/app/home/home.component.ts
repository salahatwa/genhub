import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { CategoryService } from "../categories/shared/category.service";
import { PostService } from "../posts/shared/post.service";
import { Meta, Title } from "@angular/platform-browser";

// import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { SeoService } from "../shared/services/seo.service";
import { isPlatformBrowser } from "@angular/common";
import { SessionStorageService } from "../shared/services/session-storage.service";
import { UserService } from "../shared/services/user.service";
declare const $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, AfterViewInit {
  // modalRef: BsModalRef;

  // defaultImage = "https://via.placeholder.com/400x200.png?text=Tutscoder";
  defaultImage = "./assets/images/400x200.png";


  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
    private postService: PostService,
    private categoryService: CategoryService,
    private meta: Meta,
    private title: Title,
    private userService: UserService,
    // private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private seoService: SeoService,
    private sessionStorageService: SessionStorageService
  ) {
    this.seoService.setMetaTags({
      title: `TutsCoder - Programming Blog & Web Development Tutorials`,
      description: `Learn Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress with TutsCoder tutorials`,
    });
    this.meta.addTag({
      name: "keywords",
      content: `Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress, tutorials`,
    });
  }
  latestPosts: any = [];
  angularPosts: any = [];
  jsPosts: any = [];
  wordpressPosts: any = [];
  devPosts: any = [];
  nodePosts: any = [];
  popularPosts: any = [];

  // @ViewChild("subscriberModal") elementView: ElementRef;

  ngOnInit() {
    this.getLatestPosts();
    this.getPostByCategory("angular");
    this.getPostByCategory("nodejs");
    this.getPostByCategory("javascript");
    this.getPostByCategory("wordpress");
    this.getPostByCategory("web-development");
  }

  private getLatestPosts() {
    if (this.sessionStorageService.getSessionStorage("latestPosts")) {
      this.latestPosts = JSON.parse(
        this.sessionStorageService.getSessionStorage("latestPosts")
      );
    } else {
      let reqData = {
        limit: 4,
        page: 1,
      };
      this.postService.getPosts(reqData).subscribe((response) => {
        this.latestPosts = response["data"];
        this.sessionStorageService.setSessionStorage(
          "latestPosts",
          JSON.stringify(response["data"])
        );
      });
    }
  }

  private getPostByCategory(category) {
    let reqData = {
      limit: 5,
      category: category,
    };

    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      if (category == "angular") {
        this.angularPosts = response["data"];
      }
      if (category == "nodejs") {
        this.nodePosts = response["data"];
      }
      if (category == "javascript") {
        this.jsPosts = response["data"];
      }
      if (category == "wordpress") {
        this.wordpressPosts = response["data"];
      }
      if (category == "web-development") {
        this.devPosts = response["data"];
      }
    });
  }

  addSubscribe(email) {
    let reqData = {
      email: email,
    };
    this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platform)) {
      $(".nav.navbar-nav li a").on("click", function () {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        $(this).find("li i").toggleClass("fa-angle-down fa-angle-up");
      });

      /* ----------------------------------------------------------- */
      /*  Site search
	/* ----------------------------------------------------------- */

      $("#search").on("click", function () {
        $(".site-search").addClass("visible");
        $("#searchInput").focus();
      });
      $(".search-close").on("click", function () {
        $(".site-search").removeClass("visible");
      });

      /* ----------------------------------------------------------- */
      /*  Scroll To Top
	/* ----------------------------------------------------------- */
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $(".scroll-to-top").fadeIn();
        } else {
          $(".scroll-to-top").fadeOut();
        }
      });

      // scroll body to 0px on click
      $(".scroll-to-top").on("click", function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          500
        );
        return false;
      });
    }
  }
}
