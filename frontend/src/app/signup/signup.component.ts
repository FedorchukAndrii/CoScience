import { Component, OnInit } from '@angular/core';
import {User} from "../classes/user";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.http.post(
      'http://localhost:3333/auth/signup',
      new User(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value),
      {responseType: 'text'}).subscribe(data => console.log(data));
  }
}
