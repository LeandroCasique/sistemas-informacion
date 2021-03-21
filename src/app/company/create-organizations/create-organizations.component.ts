import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationsService } from 'src/app/services/organizations.service';

@Component({
  selector: 'app-create-organizations',
  templateUrl: './create-organizations.component.html',
  styleUrls: ['./create-organizations.component.css']
})
export class CreateOrganizationsComponent implements OnInit {

  public organizations: Array<any> = [];
  public id;
  public idOrganization;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organization: OrganizationsService,
    private formBuilder: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idOrganization = this.route.snapshot.paramMap.get('idOrganization');
    this.form = this.formBuilder.group({
      Nb_Organizacion: ['', Validators.required],
      Co_Organizacion_Organizacion: [''],
      Co_Empresa: [this.id || ''],
      Nu_Telefono: [''],
      Tx_Email: [''],
    });

    console.log(this.form.value)
    
    if(this.idOrganization) {
      this.organization.getOneOrganization(this.idOrganization).subscribe((data: any) => {
        console.log(data);
        this.form.patchValue(data);
        this.id = data.Co_Empresa;
        this.getOrganization();
      });
    }
  }

  ngOnInit(): void {
    if(this.id) this.getOrganization();
  }

  getOrganization() {
    this.organization.getAllOrganizations(this.id).subscribe((data: any) => {
      this.organizations = data;
    });
  }

  createOrganization() {
    if(this.form.valid) {

      if(!this.idOrganization) {
        this.organization.createOrganization(this.form.value).subscribe(data => {
          console.log(data);
          this.router.navigate([`/companies/organization/${this.id}`]);
        });
      } else {
        let payload = {
          Nb_Organizacion: this.form.get('Nb_Organizacion').value,
          Co_Organizacion_Organizacion: this.form.get('Co_Organizacion_Organizacion').value,
          Nu_Telefono: this.form.get('Nu_Telefono').value,
          Tx_Email: this.form.get('Tx_Email').value,
        }

        this.organization.updateOrganizacion(payload, this.idOrganization).subscribe(data => {
          console.log(data);
          this.router.navigate([`/companies/organization/${this.idOrganization}`]);
        });
      }
    }
  }
 
}
