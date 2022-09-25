import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export abstract class RestService {
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    httpGet(url: string, options: any = {}): Promise<any> {
        return this._http.get(`${environment.api_url}/${url}`, options).toPromise();
    }

    httpPost(url: string, body: any, options: any = {}): Promise<any> {
        return this._http.post<any>(`${environment.api_url}/${url}`, body, options).toPromise();
    }

    httpPut(url: string, body: any, options: any = {}): Promise<any> {
        return this._http.put<any>(`${environment.api_url}/${url}`, body, options).toPromise();
    }

    httpDelete(url: string, options: any = {}): Promise<any> {
        return this._http.delete(`${environment.api_url}/${url}`, options).toPromise();
    }

}