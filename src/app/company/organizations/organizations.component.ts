import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsService } from 'src/app/services/organizations.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  public displayedColumns: string[] = ['Co_Organizacion', 'Nb_Organizacion', 'Co_Organizacion_Organizacion', 'Co_Empresa', 'Nu_Telefono', 'Tx_Email', 'buttons'];
  public dataSource: any = [];
  public id;

  constructor(private route: ActivatedRoute, private organization: OrganizationsService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getOrganization();
  }

  getOrganization() {
    this.organization.getAllOrganizations(this.id).subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
  }

  deleteOrganization(idOrganozacion) {
    this.organization.deleteOrganization(idOrganozacion).subscribe(data => {
      console.log(data);
      this.getOrganization();
    });
  }
}
