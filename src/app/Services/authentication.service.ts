import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<Response> {
    return this.http.post('/users/authenticate', {username:username, password: password})
      .map((response: Response) => {
        let user = response.json();
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
