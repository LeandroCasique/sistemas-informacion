import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  public apiUrl: string = environment.apiUrl;
  public token: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.token = this.auth.token;
    console.log(this.token)
  }

  public getAllCompanies() {
    return this.http.get(`${this.apiUrl}api/companies`, { headers: { token: this.token } });
  }

  public deteleCompanies(idCompany) {
    return this.http.delete(`${this.apiUrl}api/companies/${idCompany}`, { headers: { token: this.token } });
  } //VENIR AQUUÍ LUEGUP AJSDJASGDHGASJDGHASDGJASGDJ

}
