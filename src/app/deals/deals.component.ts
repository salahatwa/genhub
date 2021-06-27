import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor(private seoService : SeoService) {
  
    this.seoService.setMetaTags({
      title:`Promo Codes, Coupons, Deals & Offers for Web Development - TutsCoder`,
      description:`Get exclusive discount using our promo code, coupons, and promotion links`
    });
   }

  ngOnInit(): void {
  }

}
