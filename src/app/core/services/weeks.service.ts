import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Week } from '@core/models';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class WeeksService extends RestService {

  constructor(private http: HttpClient) {
    super(http);
  }

  findAll(username: string): Promise<Week[]> {
    return super.httpGet(`weeks/${username}`);
  }

  find(username: string, date: Date): Promise<Week> {
    return super.httpGet(`weeks/${username}/${date.toISOString().split('T')[0]}`);
  }

}
