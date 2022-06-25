import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../classes/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.http.post(
      'http://localhost:3333/auth/signin',
      new User(this.signinForm.get('email')?.value, this.signinForm.get('password')?.value),
      {responseType: 'text'}).subscribe(data => console.log(data));
  }
}
