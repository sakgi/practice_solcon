import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3600/api/users/add'; // API Endpoint

  constructor(private http: HttpClient) {}

  addUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
