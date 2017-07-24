import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import {User} from "../Models/User";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('/users').map((response: Response) => {
      response.json();
    });
  }

  getById(id: string) {
    return this.http.get('/users/' + id).map((response: Response) => {
      response.json();
    });
  }

  create(user: User) {
    return this.http.post('/users/register', user);
  }

  update(user: User) {
    return this.http.put('/users/' + user._id, user);
  }

  delete(user: User) {
    return this.http.delete('/users/' + user._id);
  }

}
