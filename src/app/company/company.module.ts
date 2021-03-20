import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [CompaniesComponent, CreateCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class CompanyModule { }
