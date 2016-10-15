import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private actionUrl : string;
  private headers : Headers;
  private token : string;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/user';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public isLogged() : boolean {
    return this.token != null;
  }

  public login(user : string, password : string) : Observable<boolean> {
    return this._http.post(this.actionUrl + '/login', { login : user, password : password}, { headers : this.headers })
      .do((response : Response) => {
        if (response.json()) {
          this.token = response.json().token;
        }
      })
      .map((response : Response) => (response.json()).token != null);
  }
}
