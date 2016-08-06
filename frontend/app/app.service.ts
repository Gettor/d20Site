import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Item } from './app.item';

@Injectable()
export class DataService {

  private actionUrl : string;
  private headers : Headers;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public Get = (): Observable<Item[]> => {
    return this._http.get(this.actionUrl)
      .map((response : Response) => <Item[]>response.json());
  }
}
