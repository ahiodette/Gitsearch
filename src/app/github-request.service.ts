import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from '../app/user';



@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0,0,0,"");
  }

  githubRequest() {
    interface ApiResponse {
      
      login: string;
      name: string;
      avatar_url: string;
      followers:number;
      following:number;
      public_repos: number;
      url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/ahiodette?access_token="+environment.key).toPromise().then(response => {
        this.user.login = response.login
        this.user.name = response.name
        this.user.avatar_url= response.avatar_url
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.public_repos = response.public_repos
        this.user.url=response.url

        resolve()
      },
        error => {
          this.user.login = "User not found"
          this.user.name = "No name is found"
          this.user.avatar_url = "No profile picture"
          this.user.followers=0
          this.user.following=0
          this.user.public_repos = 0
          this.user.url= "Not found"

          reject(error)
        })
    })
    return promise
  }
}
