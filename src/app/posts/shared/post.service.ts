import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";

  getPosts(reqData?) {
    let params = new HttpParams();

    params = params.append("limit", reqData.limit);
    params = params.append("page", reqData.page);

    return this.http.get(`${this.API_URL}posts`, { params: params });
  }
  getAllPosts(reqData?) {
    let query = "";
    if (reqData && reqData.limit) {
      query = `limit=${reqData.limit}`;
    }
    return this.http.get(`${this.API_URL}posts/admin/all?${query}`);
  }
  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
  addComment(postId:String,data:any) {
    return this.http.post(`${this.API_URL}posts/add_comment/${postId}`, data);
  }
  replyComment(postId:String,data:any) {
    return this.http.post(`${this.API_URL}posts/reply_comment/${postId}`, data);
  }
  getPostById(postId) {
    return this.http.get(`${this.API_URL}posts/${postId}`);
  }
  getPostBySlug(slug) {
    return this.http.get(`${this.API_URL}posts/post/${slug}`);
  }
  getRelatedPosts(reqData) {
    return this.http.post(`${this.API_URL}posts/related`,reqData);
  }
  updatePost(postId: string, postData: any) {
    return this.http.patch(`${this.API_URL}posts/${postId}`, postData);
  }
  updatePostStatus(postId: string, postData: any) {
    return this.http.patch(
      `${this.API_URL}posts/update_status/${postId}`,
      postData
    );
  }
  deletePost(postId) {
    return this.http.delete(`${this.API_URL}posts/${postId}`);
  }
  getPopularPosts() {
    return this.http.get(`${this.API_URL}posts/popular`);
  }
  getFeaturedPosts() {
    return this.http.get(`${this.API_URL}posts/featured`);
  }
}
