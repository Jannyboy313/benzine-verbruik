import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class Db {
    dbAddress = environment.api_url;

    constructor(private http: HttpClient) {}

    sendGetRequest(urlPath: string): Observable<any> {
      return this.http.get<any>(this.dbAddress + urlPath, this.generateOptions());
    }

    sendPostRequest(urlPath: string, body: unknown): Observable<any> {
      return this.http.post<any>(this.dbAddress + urlPath, body, this.generateOptions());
    }

    sendPutRequest(urlPath: string, body: unknown): Observable<any> {
      return this.http.put<any>(this.dbAddress + urlPath, body, this.generateOptions());
    }

    sendDeleteRequest(urlPath: string): Observable<any> {
      return this.http.delete<any>(this.dbAddress + urlPath, this.generateOptions());
    }

    private generateOptions(): { headers: HttpHeaders, withCredentials: boolean } {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return { headers, withCredentials: true };
    }
}
