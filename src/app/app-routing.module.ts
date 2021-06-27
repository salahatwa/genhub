import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TermsComponent } from "./terms/terms.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { VerificationComponent } from "./verification/verification.component";
import { DealsComponent } from "./deals/deals.component";
import { AboutComponent } from "./about/about.component";
import { SitemapComponent } from "./sitemap/sitemap.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "post",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./categories/categories.module").then((m) => m.CategoriesModule),
  },
  {
    path: "tag",
    loadChildren: () => import("./tags/tags.module").then((m) => m.TagsModule),
  },
  {
    path: "snippets",
    loadChildren: () =>
      import("./snippets/snippets.module").then((m) => m.SnippetsModule),
  },
  {
    path: "interview-questions",
    loadChildren: () =>
      import("./questions/questions.module").then((m) => m.QuestionsModule),
  },
  {
    path: "resources",
    loadChildren: () =>
      import("./resources/resources.module").then((m) => m.ResourcesModule),
  },
  
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "sitemap",
    component: SitemapComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "deals",
    component: DealsComponent,
  },
  {
    path: "verify/:token",
    component: VerificationComponent,
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "privacy-policy",
    component: PrivacyComponent,
  },
  { path: "404", component: PageNotFoundComponent },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      enableTracing: false,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  TermsComponent,
  PrivacyComponent,
  PageNotFoundComponent,
  VerificationComponent,
  AboutComponent,
  SitemapComponent,
];
