import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router, private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('My awesome app');
    this.router.events.filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        console.dir(`Navigation event: ${event}`);
      });
    /*this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.dir(`Navigation event: ${event}`);
      }
    });*/
  }

}
