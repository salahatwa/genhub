import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page.service';

import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private pageService: PageService,private seoService : SeoService) { 
    
    this.seoService.setMetaTags({
      title:`Privacy Policy | TutsCoder`,
      description:`none`
    });

  //this.seoService.updateDescription(`${this.post.meta_description}`);
  }
  privacyPolicy
  ngOnInit(): void {
    this.pageService.getPageBySlug("privacy").subscribe((data) => {
      this.privacyPolicy = data;
    });
  
  }

}
