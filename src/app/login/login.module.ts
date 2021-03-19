import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
  declarations: [LoginComponent, SingUpComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule
  ]
})
export class LoginModule { }
