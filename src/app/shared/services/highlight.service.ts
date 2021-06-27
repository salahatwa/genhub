import { Injectable, Inject } from "@angular/core";

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

// declare var hljs: any;

/* import "clipboard";

import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss"; */
// import hljs from 'highlight.js';
// import * as hljs from 'highlight.js';
// import hljs from 'highlight.js/lib/core';

// import * as hljs from 'highlight.js';

// declare var Prism: any;
 declare var hljs: any;


@Injectable()
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      // Prism.highlightAll();
      console.log(hljs);
      hljs.highlightAll();
    }
  }
}
