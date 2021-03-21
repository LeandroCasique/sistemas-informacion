import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'org_padre', 'empresa', 'tel', 'email', 'buttons'];
  public dataSource: any = [
    {position: 1, name: 'Te quiero Leandro :c', org_padre: 1, empresa: 'test', tel: 1234567, email: "test@test.com",  buttons: 'test'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
