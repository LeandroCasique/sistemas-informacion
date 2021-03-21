import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public form: FormGroup;
  public id;

  constructor(
    private formBuilder: FormBuilder, 
    private companiesService: CompaniesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      Nb_Empresa: ['', Validators.required],
      Nu_Registro: [''],
      Tx_Direccion: [''],
      Nu_Latitud: [0],
      Nu_Longitud: [0],
      Nu_Movil: [''],
      Nu_Telefono: [''],
      Tx_Email: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    if(this.id) {
      this.companiesService.getOneCompany(this.id).subscribe(data => {
        console.log(data);

        this.form.patchValue(data);
      });
    }
  }
  
  createCompany() {
    if(this.form.valid) {
      if(this.id) {
        this.companiesService.updateCompany(this.form.value, this.id).subscribe(data => {
          console.log(data);
          this.router.navigate(['/companies']);
        });
      } else {
        this.companiesService.createCompany(this.form.value).subscribe(data => {
          console.log(data);
          this.router.navigate(['/companies']);
        });
      }
    }
  }
}
