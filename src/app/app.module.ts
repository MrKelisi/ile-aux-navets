import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { AppHeaderComponent } from '@shared/components/app-header/app-header.component';
import { PassportComponent } from '@shared/components/passport/passport.component';
import { PassportEditComponent } from '@shared/components/passport-edit/passport-edit.component';
import { I18nPipe } from '@shared/pipes';

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
    AppHeaderComponent,
    TurnipComponent,
    FriendsComponent,
    GatesComponent,
    PassportComponent,
    PassportEditComponent,
    I18nPipe,
  ],
  imports: [
    AppRoutesModule,
    BrowserAnimationsModule,
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
