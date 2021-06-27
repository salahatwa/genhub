import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourcesComponent } from "./resources.component";
import { RouterModule, Routes } from "@angular/router";
import { ToolsComponent } from "./tools/tools.component";
import { CoursesComponent } from "./courses/courses.component";
import { BooksComponent } from "./books/books.component";
import { DevelopmentComponent } from './development/development.component';

const routes: Routes = [
  {
    path: "",
    component: ResourcesComponent,
    children: [
      {
        path: "tools",
        component: ToolsComponent,
      },
      {
        path: "courses",
        component: CoursesComponent,
      },
      {
        path: "books",
        component: BooksComponent,
      },
      {
        path: "devlopment-tools",
        component: DevelopmentComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ResourcesComponent,
    ToolsComponent,
    CoursesComponent,
    BooksComponent,
    DevelopmentComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResourcesModule {}
