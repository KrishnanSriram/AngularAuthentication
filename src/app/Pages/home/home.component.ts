import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/User";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  deleteUser() {

  }

  loadAllUsers() {
    // this.userService.getAll().subscribe(users => {this.users = users});
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
