import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../shared/user/user.service';

@Component({
  selector : 'my-login',
  providers : [ UserService ],
  template : `
  <div *ngIf="!isLoggedIn" class="container">
      <h1>Login</h1>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" required
            [(ngModel)]="login" name="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required
            [(ngModel)]="password" name="password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  <div *ngIf="isLoggedIn" class="container">
    <h1>Welcome {{login}}</h1>
  </div>
  `
})

export class LoginComponent implements OnInit {
  private login : string;
  private password : string;
  private isLoggedIn = false;

  constructor(private userService : UserService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle( "d20Site - Login" );
    this.isLoggedIn = this.userService.isLogged();
  }

  onSubmit() {
    this.userService.login(this.login, this.password)
    .subscribe((isLoggedIn) => ( this.isLoggedIn = isLoggedIn ));
  }
}
