import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileFormComponent} from "./components/profile-form/profile-form.component";
import {SigninComponent} from "./components/signin/signin.component";
import {AuthGuard} from "./shared/auth.guard";
import {AdministrationComponent} from "./components/administration/administration.component";
import {UsersComponent} from "./components/administration/users/users.component";
import {InterestsComponent} from "./components/administration/interests/interests.component";
import {RolesComponent} from "./components/administration/roles/roles.component";
import {MyMultiselectComponent} from "./webcomponents/my-multiselect/my-multiselect.component";

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: SigninComponent},
  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'interests', component: InterestsComponent},
      {path: 'roles', component: RolesComponent},
    ],
  },
  {path: 'multiselect', component: MyMultiselectComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
