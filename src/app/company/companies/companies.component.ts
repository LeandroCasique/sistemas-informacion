import { Component, OnInit, ViewChild } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'tel', 'number', 'dir', 'lat', 'long', 'country', 'registro', 'buttons'];
  public dataSource: any = [];

  constructor(private companiesService: CompaniesService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getAllCompanies().subscribe(data => {
      console.log("data", data);
      
      this.dataSource = data;
    });
  }

  deleteCompany(company) {
    if(company && company.Co_Empresa) {
      this.companiesService.deteleCompanies(company.Co_Empresa).subscribe(data => {
        console.log(data);
        this.getCompanies();
      })
    }
  } 

}
