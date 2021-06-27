import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ImageSnippet } from "./image-upload.component";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ImageUploadService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";

  uploadImage(image: ImageSnippet): Observable<any> {
    
    let { src, type, name } = image;
    
    const file = b64ToFile(src, type, name);
    const formData = new FormData();

    formData.append("image", file);
    

    return this.http.post(`${this.API_URL}image-upload`, formData);
  }
}

function b64ToFile(b64Data: string, type = "image/jpeg", name: string): File {
  let data;
  const aux = b64Data.split(",");
  if (aux.length > 1) {
    data = aux[1];
  } else {
    data = b64Data;
  }

  const byteString = atob(data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type });
  if (!blob) {
    return null;
  }
  return new File([blob], name, { type });
}
