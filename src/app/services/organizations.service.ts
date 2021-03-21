import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  public apiUrl: string = environment.apiUrl;
  public token: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.token = this.auth.token;
    console.log(this.token)
  }

  public getAllOrganizations(idCompany) {
    return this.http.get(`${this.apiUrl}api/organizations/${idCompany}`, { headers: { token: this.token } });
  }

  public createOrganization(organzacion) {
    return this.http.post(`${this.apiUrl}api/organizations/`, organzacion, { headers: { token: this.token } });
  }

  public deleteOrganization(idOrganizacion) {
    return this.http.delete(`${this.apiUrl}api/organizations/${idOrganizacion}`, { headers: { token: this.token } });
  }

  public getOneOrganization(idOrganizacion) {
    return this.http.get(`${this.apiUrl}api/organizations/one/${idOrganizacion}`, { headers: { token: this.token } });
  }

  public updateOrganizacion(organzacion, idOrganizacion) {
    return this.http.put(`${this.apiUrl}api/organizations/${idOrganizacion}`, organzacion, { headers: { token: this.token } });
  }
}
