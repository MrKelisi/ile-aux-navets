import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@core/models';
import { environment } from 'src/environments/environment';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${environment.api_url}/users`;

  constructor(private http: HttpClient) {}

  findAll(): any {
    const subject = new AsyncSubject();

    this.http
      .get(this.url)
      .subscribe(
        data => subject.next(data),
        error => subject.error(error),
        () => subject.complete()
      );

    return subject;
  }

  find(username: string): any {
    const subject = new AsyncSubject();

    this.http
      .get(this.url + '/' + username)
      .subscribe(
        data => subject.next(data),
        error => subject.error(error),
        () => subject.complete()
      );

    return subject;
  }

  update(username: string, user: User): any {
    return this.http
      .put<any>(this.url + '/' + username, user);
  }

  delete(username: string): any {
    return this.http
      .delete(this.url + '/' + username);
  }

  findFriends(username: string): any {
    return;
  }
}
