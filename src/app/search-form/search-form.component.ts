import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  goToUrl(username){
    this.router.navigate(['/user',username])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
