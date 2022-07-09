import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import  {FormsModule} from "@angular/forms";

import { NavbarComponent } from './webcomponents/navbar/navbar.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { MyCheckboxComponent } from './webcomponents/my-checkbox/my-checkbox.component';
import { SigninComponent } from './components/signin/signin.component';
import {AuthInterceptor} from "./shared/authconfig.interceptor";
import { AdministrationComponent } from './components/administration/administration.component';
import { UsersComponent } from './components/administration/users/users.component';
import { InterestsComponent } from './components/administration/interests/interests.component';
import { RolesComponent } from './components/administration/roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ProfileFormComponent,
    MyCheckboxComponent,
    SigninComponent,
    AdministrationComponent,
    UsersComponent,
    InterestsComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
