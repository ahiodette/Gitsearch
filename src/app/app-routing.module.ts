import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'search-form', component: SearchFormComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
