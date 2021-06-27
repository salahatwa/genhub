import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionsComponent } from "./questions.component";
import { RouterModule, Routes } from "@angular/router";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { SidebarModule } from "../shared/modules/sidebar.module";
import { QuestionListingComponent } from "./question-listing/question-listing.component";
import { SharedPostModule } from "../shared/modules/shared-post.module";

const routes: Routes = [
  {
    path: "",
    component: QuestionsComponent,
    children: [
      
      {
        path: ":category",
        component: QuestionListingComponent,
      },
      {
        path: ":category/:slug",
        component: QuestionDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionDetailComponent,
    QuestionListingComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    SharedPostModule,
    RouterModule.forChild(routes),
  ],
})
export class QuestionsModule {}
