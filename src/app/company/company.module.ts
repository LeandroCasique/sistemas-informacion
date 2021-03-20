import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CompanyModule { }
