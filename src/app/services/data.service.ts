import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public baseUrl: string = 'https://voedingapi.000webhostapp.com/public';
  constructor(private http: HttpClient, private router: Router) {}

  Login(patientnummer: any, wachtwoord: string) {
    let body = new FormData();
    body.append('patientnummer', patientnummer);
    body.append('wachtwoord', wachtwoord);

    this.http
      .post(`${this.baseUrl}/auth/login`, body)
      .subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['user']);
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getUserdata(callback?: (user: any) => void) {
    var body = new FormData();
    body.append('token', localStorage.getItem('token'));

    this.http.post(`${this.baseUrl}/auth/user`, body).subscribe((user) => {
      if (callback) {
        callback(user);
      }
    });
  }
}
