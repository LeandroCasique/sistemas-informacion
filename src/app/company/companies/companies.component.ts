import { Component, OnInit, ViewChild } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'tel', 'number', 'dir', 'lat', 'long', 'country', 'registro', 'buttons'];

  constructor(private companiesService: CompaniesService) {
  }

  ngOnInit() {
    this.companiesService.getAllCompanies().subscribe(data => {
      console.log("data", data);

      this.dataSource = data;
    });
  }

}
