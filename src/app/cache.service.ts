import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private static cache: { [key: string]: any } = {};

  static get<T>(key: string): T | null {
    return this.cache[key] || null;
  }

  static set<T>(key: string, value: T): void {
    this.cache[key] = value;
  }

  static clear(): void {
    this.cache = {};
  }
}
