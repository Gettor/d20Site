import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Monster } from './monster'

@Injectable()
export class MonstersService {

  private actionUrl : string;
  private headers : Headers;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/monsters';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getMonster(id : number) : Observable<Monster> {
    return this._http.get(this.actionUrl + '/get/' + id)
      .map((response : Response) => (<Monster>response.json()));
  }
}
