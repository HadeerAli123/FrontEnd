import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //users/select-categories-and-get-stories
  private apiUrl = 'http://127.0.0.1:8000/api/users/register';


  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, userData);
  }

  // login(credentials: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/users/login`, credentials);
  // }

}