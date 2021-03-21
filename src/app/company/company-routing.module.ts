import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent
  },
  {
    path: 'create',
    component: CreateCompanyComponent
  },
  {
    path: 'update/:id',
    component: CreateCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
