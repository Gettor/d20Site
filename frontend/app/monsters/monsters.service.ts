import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Monster } from './monster'

@Injectable()
export class MonstersService {

  private actionUrl : string;
  private headers : Headers;
  private monsters : Monster[] = [
     { name : 'Creepy monster', speed : 9, initiative : 2},
     { name : 'Really creepy monster', speed : 9, initiative : 2},
     { name : 'Murloc', speed : 9, initiative : 2},
     { name : 'Harry Potter', speed : 9, initiative : 2},
     { name : 'Frog', speed : 9, initiative : 2},
     { name : 'Magic sandal', speed : 9, initiative : 2},
     { name : 'Giant monkey', speed : 9, initiative : 2},
  ]

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/monsters';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getMonster(id : number) : Monster {
     return this.monsters[id];
  }
}
