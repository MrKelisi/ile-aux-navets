import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Auth } from '@core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = `${environment.api_url}/auth/`;
  private currentUserSubject: BehaviorSubject<Auth>;
  public currentUser: Observable<Auth>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('auth')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Auth {
    return this.currentUserSubject.value;
  }

  public getToken(): string {
    return this.currentUserValue ? this.currentUserValue.token : null;
  }

  login(username, password) {
    return this.http.post<any>(this.url + 'login', { username, password })
      .pipe(map(auth => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('auth', JSON.stringify(auth));
        this.currentUserSubject.next(auth);
        return auth;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('auth');
    this.currentUserSubject.next(null);
  }

  register(username, display_name, password) {
    return this.http.post<any>(this.url + 'register', { username, display_name, password })
      .pipe(map(auth => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('auth', JSON.stringify(auth));
        this.currentUserSubject.next(auth);
        return auth;
      }));
  }
}
