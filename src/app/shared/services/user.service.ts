import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {
    
  }

  API_URL = "/api/v1/";

  /*   getPages() {
    return this.http.get(`${this.API_URL}pages`);
  } */
  addSubscribe(data) {
    return this.http.post(`${this.API_URL}users/subscribe`, data);
  }
  verifySubscriber(token) {
    return this.http.patch(`${this.API_URL}users/verify/${token}`, {});
  }

  contactUs(data) {
    return this.http.post(`${this.API_URL}users/contact`, data);
  }

  /*  updatePage(id: string, postData: any) {
    return this.http.patch(`${this.API_URL}pages/${id}`, postData);
  } */

  /*  getPageById(id) {
    return this.http.get(`${this.API_URL}pages/${id}`);
  } */

  /*  getPageByCategory(category) {
    return this.http.get(`${this.API_URL}pages/by_category/${category}`);
  } */
  /*  getPageBySlug(slug) {
    return this.http.get(`${this.API_URL}pages/by_slug/${slug}`);
  } */

  /*  deletePage(id) {
    return this.http.delete(`${this.API_URL}pages/${id}`);
  } */
}
