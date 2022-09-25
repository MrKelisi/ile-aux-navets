import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@core/models';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends RestService {

  constructor(private http: HttpClient) {
    super(http);
  }

  findAll(): Promise<User[]> {
    return super.httpGet('users');
  }

  find(username: string): Promise<User> {
    return super.httpGet(`users/${username}`);
  }

  update(username: string, user: User): Promise<User> {
    return super.httpPut(`users/${username}`, user);
  }

  delete(username: string): Promise<void> {
    return super.httpDelete(`users/${username}`);
  }

  findFriends(username: string): any {
    return;
  }
}
