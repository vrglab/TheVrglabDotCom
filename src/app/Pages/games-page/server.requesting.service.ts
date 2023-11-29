import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestingService {
  constructor(private http: HttpClient) { }

  getData(request_link: string): Observable<any> {
    return this.http.get<any>(request_link);
  }
}
