import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import  {FormsModule} from "@angular/forms";

import { NavbarComponent } from './webcomponents/navbar/navbar.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MyCheckboxComponent } from './webcomponents/my-checkbox/my-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ProfileFormComponent,
    MyCheckboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
