import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@core/models';
import { RestService } from './rest.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RestService {
  private currentUserSubject: BehaviorSubject<Auth>;
  public currentUser: Observable<Auth>;

  constructor(private http: HttpClient) {
    super(http);
    this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('auth')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Auth {
    return this.currentUserSubject.value;
  }

  public getToken(): string {
    return this.currentUserValue ? this.currentUserValue.token : null;
  }

  login(username, password): Promise<void> {
    return super.httpPost('auth/login', {username, password})
      .then(this.handleAuthenticationResponse.bind(this));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('auth');
    this.currentUserSubject.next(null);
  }

  register(username, display_name, password): Promise<void> {
    return super.httpPost('auth/register', {username, display_name, password})
      .then(this.handleAuthenticationResponse.bind(this));
  }

  private handleAuthenticationResponse(auth: Auth) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('auth', JSON.stringify(auth));
    this.currentUserSubject.next(auth);
  }
}
