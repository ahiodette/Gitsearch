import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from '../../environments/environment';
import { GithubRequestService } from '../github-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // users:User[];
  user: User;
  constructor(private githubRequestService: GithubRequestService) {
    this.githubRequestService = githubRequestService;
  }

  ngOnInit() {
    this.githubRequestService.githubRequest()
    this.user = this.githubRequestService.user
    

    // this.http.get<ApiResponse>("https://api.github.com/users/ahiodette?access_token=" + environment.key).subscribe(data => {
    //   this.user = new User(data.login, data.name, data.avatar_url, data.public_repos)


  }

}
