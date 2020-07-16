import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutesModule } from './app.routes';
import { EverybodyComponent } from './everybody/everybody.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './_components/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TurnipComponent } from './turnip/turnip.component';
import { FriendsComponent } from './friends/friends.component';
import { GatesComponent } from './gates/gates.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PassportComponent } from './_components/passport/passport.component';
import { PassportEditComponent } from './_components/passport-edit/passport-edit.component';
import {AuthInterceptor} from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EverybodyComponent,
    AppHeaderComponent,
    TurnipComponent,
    FriendsComponent,
    GatesComponent,
    PassportComponent,
    PassportEditComponent,
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy , useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
