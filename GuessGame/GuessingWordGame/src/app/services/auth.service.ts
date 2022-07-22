import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  setToken(token): void{
    localStorage.setItem('token',token)
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() != null
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

  login({name,email}):Observable<any>
  {    
    this.setToken('jwtToken')    // backend login api for authentication
    return this.http.post<any>('http://localhost:4000/user',{name,email,score:0})
  }

  updateScore({score}):Observable<any>             // need to implement in different sevice file
  {
    return this.http.post<any>('http://localhost:4000/user/updatescore',{email:localStorage.getItem('email'),score})
  }
}
