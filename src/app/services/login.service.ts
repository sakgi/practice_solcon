import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/api-keys';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // Call login API with email instead of username
  login(email: string, password: string): Observable<any> {
    const url = `https://solcon-backend.onrender.com/auth/login`;  // Backend login endpoint
    const body = { email, password };
    const headers = { 
      'Content-Type': 'application/json', 
      'x-api-key': this.apiKey 
    };

    return this.http.post(url, body, { headers });
  }
}
