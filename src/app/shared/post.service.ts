import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostModel } from "./post-model";
import { Observable } from "rxjs";
import { CreatePostPayload } from "../post/create-post/create-post.payload";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(
      "https://reddit-clone-sb.herokuapp.com/api/posts/"
    );
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(
      "https://reddit-clone-sb.herokuapp.com/api/posts/",
      postPayload
    );
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(
      "https://reddit-clone-sb.herokuapp.com/api/posts/" + id
    );
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(
      "https://reddit-clone-sb.herokuapp.com/api/posts/by-user/" + name
    );
  }
}
