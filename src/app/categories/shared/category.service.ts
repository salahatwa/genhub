import { HttpClient,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";
  
  getPostByCateogry(reqData?) {
    
    let params = new HttpParams();

    params = params.append('limit', reqData.limit);
    params = params.append('page', reqData.page);

    return this.http.get(`${this.API_URL}posts/by_category/${reqData.category}`,{params: params});
  }
  getAllCateogry(reqData?) {
    
    return this.http.get(`${this.API_URL}categories`);
  }
  getAllTags() {
    
    return this.http.get(`${this.API_URL}tags`);
  }
  getPostByTag(reqData?) {
    
   
    let params = new HttpParams();

    params = params.append('limit', reqData.limit);
    params = params.append('page', reqData.page);

    return this.http.get(`${this.API_URL}posts/by_tag/${reqData.tag}`,{params: params});
  }
  /*  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
  getPostById(postId) {
    return this.http.get(`${this.API_URL}posts/${postId}`);
  } */
}
