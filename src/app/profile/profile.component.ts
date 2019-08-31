import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from '../../environments/environment';
import { GithubRequestService } from '../github-request.service';
import { ActivatedRoute, ParamMap } from  '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // users:User[];
  user: User;
  constructor(private githubRequestService: GithubRequestService, private route:ActivatedRoute) {
    this.githubRequestService = githubRequestService;
  }

  ngOnInit() {
    let username=this.route.snapshot.paramMap.get('username')
    this.githubRequestService.githubRequest(username)
    this.user = this.githubRequestService.user
    

    // this.http.get<ApiResponse>("https://api.github.com/users/ahiodette?access_token=" + environment.key).subscribe(data => {
    //   this.user = new User(data.login, data.name, data.avatar_url, data.public_repos)


  }

}
