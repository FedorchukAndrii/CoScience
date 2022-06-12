import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {ProfileFormComponent} from "./profile-form/profile-form.component";

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'profile-form', component: ProfileFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
