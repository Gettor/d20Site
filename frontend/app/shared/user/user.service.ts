import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {

  private actionUrl : string;
  private headers : Headers;
  private user : User;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/user';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getUser() : string {
    return this.user.username;
  }

  public isLogged() : boolean {
    return this.user.username != null;
  }

  public login(user : string, password : string) : Observable<boolean> {
    return this._http.get(this.actionUrl)
      .do((response : Response) => (this.user = <User>response.json()))
      .map((response : Response) => (<User>response.json()).username != null);
  }
}
