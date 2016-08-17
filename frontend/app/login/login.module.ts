import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { UserService } from '../shared/user/user.service';

@NgModule({
  imports : [ FormsModule, BrowserModule ],
  declarations : [ LoginComponent ],
  exports : [ LoginComponent ],
  providers : [ UserService ]
})

export class LoginModule { }
