import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private actionUrl : string;
  private headers : Headers;
  private user : string;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/user';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getUser() : string {
    return this.user;
  }

  public isLogged() : boolean {
    return this.user != null;
  }

  public login(user : string, password : string) : Observable<boolean> {
    return this._http.get(this.actionUrl)
      .map((response : Response) => <boolean>response.json());
  }
}
