import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeksService {

  private url = `${environment.api_url}/weeks`;

  constructor(private http: HttpClient) {}

  findAll(username: string): any {
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

  find(username: string, date: Date): any {
    const subject = new AsyncSubject();

    this.http
      .get(this.url + '/' + username + '/' + date.toISOString().split('T')[0])
      .subscribe(
        data => subject.next(data),
        error => subject.error(error),
        () => subject.complete()
      );

    return subject;
  }

}
