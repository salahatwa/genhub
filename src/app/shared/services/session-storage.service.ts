import { Injectable, Injector, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class SessionStorageService {
  constructor(injector: Injector) {
    this.platformId = injector.get(PLATFORM_ID);
  }
  platformId: any;
  setSessionStorage(key, value) {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.setItem(key, value);
    }
  }
  getSessionStorage(key) {
    if (isPlatformBrowser(this.platformId)) {
      return window.sessionStorage.getItem(key);
    }
  }
  removeSessionStorage(key) {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(key);
    }
  }
  clearSessionStorage() {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.clear();
    }
  }
}
