import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { Face } from '@core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacesService {

  private url = `${environment.api_url}/faces`;

  constructor(private http: HttpClient) {}

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

  update(username: string, face: Face): any {
    return this.http
      .put<any>(this.url + '/' + username, face);
  }
}
