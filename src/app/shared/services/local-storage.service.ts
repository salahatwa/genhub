import { Injectable, Injector, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(injector: Injector) {
    this.platformId = injector.get(PLATFORM_ID);
  }
  platformId: any;
  setLocalStorage(key, value) {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(key, value);
    }
  }
  getLocalStorage(key) {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem(key);
    }
  }
  removeLocalStorage(key) {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem(key);
    }
  }
  clearLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.clear();
    }
  }
}
