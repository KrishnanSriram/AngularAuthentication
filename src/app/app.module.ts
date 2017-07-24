import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './SharedComponents/alert/alert.component';
import { HeaderComponent } from './SharedComponents/header/header.component';
import { FooterComponent } from './SharedComponents/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import {AuthGuardComponent} from './Guards/auth/auth.component';
import {AlertService} from "./Services/alert.service";
import {AuthenticationService} from "./Services/authentication.service";
import {customHTTPProvider} from "./Helpers/CustomHTTP.helper";
import {UserService} from "./Services/user.service";
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AuthGuardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AlertService,
    AuthenticationService,
  AuthGuardComponent,
  customHTTPProvider,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
