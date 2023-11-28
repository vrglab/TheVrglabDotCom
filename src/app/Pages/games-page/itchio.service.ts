import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItchioService {
  private itchioApiGetGamesLink = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://itch.io/api/1/3rF63nNkfKYSzTomDcNghRn6pJQFZ3qDK7rnCMe0/my-games')
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.itchioApiGetGamesLink);
  }
}

export interface User {
  username: string;
  id: number;
  url: string;
  cover_url: string;
}

export interface Earnings {
  currency: string;
  amount: number;
  amount_formatted: string;
}

export interface Game {
  type: string;
  p_linux?: boolean;
  p_osx?: boolean;
  p_android?: boolean;
  cover_url: string;
  short_text: string;
  created_at: string;
  min_price?: number;
  user: User;
  classification: string;
  p_windows?: boolean;
  views_count: number;
  url: string;
  purchases_count: number;
  has_demo: boolean;
  published_at: string;
  published: boolean;
  downloads_count: number;
  can_be_bought: boolean;
  id: number;
  in_press_system: boolean;
  title: string;
  earnings?: Earnings[];
  embed?: {
    width: number;
    height: number;
    fullscreen: boolean;
  };
}
