// import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Repository } from '../app/repository';


// @Injectable({
//   providedIn: 'root'
// })
// export class RepoListService {

//   repository: Repository;
//   constructor(private http: HttpClient) {
//     this.repository = new Repository("", "", new Date());
//   }
//   repoListService() {
//     interface Apiresponse {
//       name: string;
//       html_url: string;
//       created_at: Date;
//     }
//     let promise = new Promise((resolve, reject) => {
//       this.http.get<Apiresponse>("https://api.github.com/users/ahiodette/repos?access_token=" + environment.key).toPromise().then(response => {
//         this.repository.name = response.name
//         this.repository.url = response.url
//         this.repository.created_at = response.created_at

//         resolve()
//       },

//         error =>{
//           this.repository.name="RepoName not found"
//           this.repository.html_url="No repo URL found"
//           this.repository.created_at=new Date

//           reject(error)
//         })
//     })
//     return promise
//   }
// }
