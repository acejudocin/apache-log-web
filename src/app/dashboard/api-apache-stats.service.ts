import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiApacheStatsService {

  private apiApacheStatsUrl = environment.apiApacheStatsUrl;

  constructor(private http: HttpClient) { }

  getBrowserStats() {
    return this.http.get<any>(`${this.apiApacheStatsUrl}/statistics/browsers`);
  }
}
