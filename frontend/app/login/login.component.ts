import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../shared/user/user.service';

@Component({
  selector : 'my-login',
  providers : [ UserService ],
  template : `
  <div *ngIf="!login" class="container">
      <h1>Login</h1>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" required
            [(ngModel)]="inputLogin" name="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required
            [(ngModel)]="inputPassword" name="password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  <div *ngIf="login" class="container">
    <h1>Welcome {{login}}</h1>
    <button type="button" class="btn btn-default" (click)="onLogout()">Logout</button>
  </div>
  `
})

export class LoginComponent implements OnInit {
  private inputLogin : string;
  private inputPassword : string;
  private login : string;

  constructor(private userService : UserService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle( "d20Site - Login" );
    this.login = this.userService.getLogin();
  }

  onSubmit() {
    this.userService.login(this.inputLogin, this.inputPassword)
    .subscribe(() => {
      this.login = this.userService.getLogin();
    });
  }

  onLogout() {
    this.userService.logout();
    this.login = null;
  }
}
