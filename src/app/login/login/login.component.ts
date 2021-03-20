import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
    private router: Router,
    private auth: AuthService) { 
      this.form = this.formBuilder.group({
        Tx_Email: ['', Validators.required],
        Tx_Clave: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  }

  public login() {
    if(this.form.valid) {
      this.userService.login(this.form.value).subscribe((data: any) => {
        console.log(data)
        this.auth.setToken(data.token);
        this.router.navigate(['/companies']);
      });
    }
  }

}
