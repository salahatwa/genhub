import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.scss"],
})
export class ToolsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toolbox: any = [
    {
      title: "Web Hosting",
      data: [
        {
          title: "Bluehost",
          desc: "Bluehost is the best web hosting to host your website.",
          img: "./assets/images/bluehost-logo.png",
          link: "https://www.bluehost.com/track/tutscoder",
        },
      /*   {
          title: "GoDaddy Hosting",
          desc: "Get 12 months of Economy Web Hosting for just $1 per month.",
          img: "./assets/images/godaddy-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        }, */
        {
          title: "HostGator",
          desc: "Hosting Starting at $2.95/month only for iftiSEO readers.",
          img: "./assets/images/hostgator-logo.png",
          link: "https://partners.hostgator.com/43kG",
        },
        {
          title: "Digital Ocean",
          desc: "Host your site for 2 months for FREE using this Deal.",
          img: "./assets/images/digitalOcean-logo.png",
          link: "https://m.do.co/c/01327f6f91f2",
        },
      ],
    },
    /* {
      title: "Marketing Tools",
      data: [
        {
          title: "MailChimp",
          desc: "Start your Email Marketing with MailChimp.",
          img: "./assets/images/mailChimp-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
        {
          title: "MailerLite",
          desc: "1000 Subscribers for Free with Automation & AutoResponders.",
          img: "./assets/images/mailerLite-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
        {
          title: "Aweber",
          desc: "Start with Aweber Today. Get 30 Day Free Trial.",
          img: "./assets/images/aweber-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
      ],
    }, */
  /*   {
      title: "SEO Tools",
      data: [
        {
          title: "SEMRush",
          desc:
            "Rank for your target keywords & drive traffic from search engines.",
          img: "./assets/images/semrush-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
      ],
    }, */
    /* {
      title: "Writing Tools",
      data: [
        {
          title: "Grammarly",
          desc: "Grammarly will help you eliminate all errors in your content.",
          img: "./assets/images/grammarly-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
      ],
    }, */
  /*   {
      title: "Themes",
      data: [
        {
          title: "ThemeForest",
          desc: "The Best Collection of WordPress Themes is here.",
          img: "./assets/images/themeForest-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
      ],
    }, */
/*     {
      title: "Learning Resources",
      data: [
        {
          title: "Udemy",
          desc: "Get Any Udemy Course for just $10.",
          img: "./assets/images/udemy-logo.png",
          link: "https://tutscoder.com/Recommended/bluehost",
        },
      ],
    }, */
  ];
}
