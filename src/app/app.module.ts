import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from '@core/helpers';

import { EverybodyComponent } from '@features/everybody/everybody.component';
import { FriendsComponent } from '@features/friends/friends.component';
import { GatesComponent } from '@features/gates/gates.component';
import { HomeComponent } from '@features/home/home.component';
import { LoginComponent } from '@features/login/login.component';
import { ProfileComponent } from '@features/profile/profile.component';
import { RegisterComponent } from '@features/register/register.component';
import { TurnipComponent } from '@features/turnip/turnip.component';

import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EverybodyComponent,
    TurnipComponent,
    FriendsComponent,
    GatesComponent,
  ],
  imports: [
    AppRoutesModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy , useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
