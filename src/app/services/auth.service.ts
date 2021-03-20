import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  public tokenObservable: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() {
    let token = localStorage.getItem('token');

    if(token) this.setToken(token);
  }

  public setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
    this.tokenObservable.next(token);
  }

  public get tokenAsObservable() {
    return this.tokenObservable.asObservable();
  }
  
  public get tokenValue() {
    return this.token;
  }
}
