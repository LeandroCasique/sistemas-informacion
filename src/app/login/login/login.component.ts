import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(    
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.form = this.formBuilder.group({
        Tx_Email: ['', Validators.required],
        Tx_Clave: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  }

  public login() {
    if(this.form.valid) {
      this.userService.login(this.form.value).subscribe(data => {
        console.log(data)
        this.router.navigate(['/companies']);
      });
    }
  }

}
