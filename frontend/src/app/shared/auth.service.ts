import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {User} from "../classes/user";
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = 'http://localhost:3333/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: {} = {};

  constructor(private http: HttpClient, public router: Router) { }

  // SignUp
  signUp(user: User): Observable<any> {
    let api = this.endpoint + 'auth/signup';
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // SignIn
  signIn(user: User) {
    let api = this.endpoint + 'auth/signin';
    return this.http
      .post(api, user, {headers: this.headers})
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.getUserProfile().subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/profile']);
        })
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  getUserProfile(): Observable<any> {
    let api = this.endpoint + 'users/me';
    return this.http.get(api, {headers: this.headers})
      .pipe(map(res => {
        return res || {};
      }),
      catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
