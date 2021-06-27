import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  setMetaTags(config?: any) {
    config = {
      title: `TutsCoder - Programming Blog & Web Development Tutorials`,
      description: `Learn Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress with TutsCoder tutorials`,
      image: `https://www.tutscoder.com/assets/icons/apple-touch-icon.png`,
      url: `https://www.tutscoder.com/${this.router.url}`,
      ...config,
    };

    // Set title
    this.title.setTitle(config.title);

    // Google
    this.meta.updateTag({ name: "Description", content: config.description });

    // Twitter
    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({ name: "twitter:site", content: `@tutscoder` });
    this.meta.updateTag({ name: "twitter:title", content: config.title });
    this.meta.updateTag({
      name: "twitter:description",
      content: config.description,
    });
    this.meta.updateTag({ name: "twitter:image", content: config.image });

    // Facebook and other social sites
    this.meta.updateTag({ property: "og:type", content: "article" });
    this.meta.updateTag({ property: "og:site_name", content: `Tutscoder` });
    this.meta.updateTag({ property: "og:title", content: config.title });
    this.meta.updateTag({
      property: "og:description",
      content: config.description,
    });
    this.meta.updateTag({ property: "og:image", content: config.image });
    this.meta.updateTag({ property: "og:url", content: config.url });
   /*  this.meta.updateTag({
      property: "fb:app_id",
      content: `your-facebook-app-id`,
    }); */
  }
}
