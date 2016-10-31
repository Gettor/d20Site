import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {

  private actionUrl : string;
  private headers : Headers;
  private jwtHelper = new JwtHelper();

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/user';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getLogin() : string {
    var token = localStorage.getItem('id_token');
    if (!token || !tokenNotExpired()) { return null; }
    return this.jwtHelper.decodeToken(token).login;
  }

  public login(user : string, password : string) : Observable<void> {
    return this._http.post(this.actionUrl + '/login', { login : user, password : password}, { headers : this.headers })
      .do((response : Response) => {
        if (response.json()) {
          localStorage.setItem('id_token', response.json().token);
        }
      })
      .map((response : Response) => (null));
  }

  public logout() : void {
    localStorage.removeItem('id_token');
  }
}
