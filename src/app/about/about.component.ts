import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page.service';

import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pageService: PageService,private seoService : SeoService) { 
    
    this.seoService.setMetaTags({
      title:`About us | TutsCoder`,
      description:`About us | TutsCoder`
    });

  }
  aboutUs:any = {}
  ngOnInit(): void {
    this.pageService.getPageBySlug("about-us").subscribe((data) => {
      this.aboutUs = data;
    });
  
  }
}
