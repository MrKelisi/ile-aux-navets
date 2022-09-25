import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Face } from '@core/models';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class FacesService extends RestService {

  constructor(private http: HttpClient) {
    super(http);
  }

  find(username: string): Promise<Face> {
    return super.httpGet(`faces/${username}`);
  }

  update(username: string, face: Face): Promise<Face> {
    return super.httpPut(`faces/${username}`, face);
  }
}
