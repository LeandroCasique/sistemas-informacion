import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  public form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Nb_Usuario: ['', Validators.required],
      Tx_Email: ['', Validators.required],
      Nu_Movil: [''],
      Tx_Clave: ['', Validators.required],
      Tx_ClaveConfirnm: ['', Validators.required],
    }, {validator: this.passwordConfirming});
  }

  ngOnInit(): void {
  }

  public signUp(){
    if(this.form.valid) {
      console.log(this.form);

      let payload = {
        Nb_Usuario: this.form.get('Nb_Usuario').value,
        Tx_Email: this.form.get('Tx_Email').value,
        Nu_Movil: this.form.get('Nu_Movil').value,
        Tx_Clave: this.form.get('Tx_Clave').value,
      }

     /* this.user.signUp(payload).subscribe((data => {
        console.log(data);
      }));*/
    }
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('Tx_Clave').value !== c.get('Tx_ClaveConfirnm').value) {
        return {invalid: true};
    }
  }

}
