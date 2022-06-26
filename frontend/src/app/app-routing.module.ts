import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {ProfileFormComponent} from "./profile-form/profile-form.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: SigninComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
