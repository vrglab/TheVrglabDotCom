import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestingService {
  constructor(private http: HttpClient) { }

  getData(context: string): Observable<any> {
    let link: string = 'https://api.allorigins.win/get?url='

    if (context == 'gamejolt') {
      link += 'https://gamejolt.com/site-api/web/library/games/developer/@vrglab'
    }
    if (context == 'itchio') {
      link += 'https://itch.io/api/1/3rF63nNkfKYSzTomDcNghRn6pJQFZ3qDK7rnCMe0/my-games'
    }
    return this.http.get<any>(link);
  }
}
