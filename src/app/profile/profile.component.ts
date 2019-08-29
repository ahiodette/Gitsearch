import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:User[];
  user:User;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
username:string;
fullName:string;
profile:string;
repoNumber:number;
    }
    this.http.get<ApiResponse>("'https://api.github.com/users/'+username+'?access_token='+ environment.key")
    this.user
  }

}
