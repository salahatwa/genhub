import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/page.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(private pageService : PageService) { }

  ngOnInit(): void {
    this.getToolsByGroup();
  }

  toolbox:any = [];

  private getToolsByGroup() {
   
    this.pageService.getToolsByGroup().subscribe((response) => {
      
      this.toolbox = response["data"];
      
    },error=>{
      console.log(error);
    });
  }


}
