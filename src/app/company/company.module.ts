import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreateOrganizationsComponent } from './create-organizations/create-organizations.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [CompaniesComponent, CreateCompanyComponent, OrganizationsComponent, CreateOrganizationsComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class CompanyModule { }
