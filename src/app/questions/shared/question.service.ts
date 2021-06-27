import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";

  getQuestions() {
    return this.http.get(`${this.API_URL}questions`);
  }
  createQuestion(newPost) {
    return this.http.post(`${this.API_URL}questions`, newPost);
  }

  updateQuestion(id: string, postData: any) {
    return this.http.patch(`${this.API_URL}questions/${id}`, postData);
  }

  getQuestionBySlug(slug) {
    return this.http.get(`${this.API_URL}questions/by_slug/${slug}`);
  }

  getQuestionByCategory(category) {
    return this.http.get(`${this.API_URL}questions/by_category/${category}`);
  }

  deleteQuestion(id) {
    return this.http.delete(`${this.API_URL}questions/${id}`);
  }
}
