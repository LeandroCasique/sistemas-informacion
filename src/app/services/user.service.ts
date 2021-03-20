import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public singUp(user: any) {
    return this.http.post(`${this.apiUrl}api/users/sing-up`, user);
  }

  public login(user: any) {
    return this.http.post(`${this.apiUrl}api/users/login`, user);
  }
}
