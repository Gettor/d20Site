import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

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
}
