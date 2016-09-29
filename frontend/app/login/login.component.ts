import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../shared/user/user.service';
import { UserData } from './userdata';

@Component({
  selector : 'my-login',
  providers : [ UserService ],
  template : `
  <div *ngIf="!isLoggedIn" class="container">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" required
            [(ngModel)]=user.username name="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control" id="password" required
            [(ngModel)]=user.password name="password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  <div *ngIf="isLoggedIn" class="container">
    <h1>Welcome {{user.usename}}</h1>
  </div>
  `
})

export class LoginComponent implements OnInit {
  private user = new UserData();
  private isLoggedIn = false;

  constructor(private _userService : UserService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle( "d20Site - Login" );
    // TODO: enable when add backend support
    //this.isLoggedIn = this._userService.isLogged();
  }
}
