import { Injectable, Inject } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Spell } from '../shared/model/spell'
import { Monster } from '../shared/model/monster';


@Injectable()
export class SpellsService {

  private actionUrl : string;
  private headers : Headers;

  constructor(private authHttp : AuthHttp, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/spells';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getSpell(id : number) : Observable<Spell> {
    return this.authHttp.get(this.actionUrl + '/get/' + id)
      .map((response : Response) => (<Spell>response.json()));
  }

  public getMonster(id : number) : Observable<Monster[]> {
    return this.authHttp.get(this.actionUrl + '/getMonster/' + id)
      .map((response : Response) => (<Monster[]>response.json()));
  }

  public updateSpell(spell : Spell) : Observable<void> {
    return this.authHttp.post(this.actionUrl + '/update/', JSON.stringify(spell), { headers : this.headers })
      .map((response : Response) => (null));
  }

  public addSpell(spell : Spell) : Observable<number> {
    return this.authHttp.post(this.actionUrl + '/add/', JSON.stringify(spell), { headers : this.headers })
      .map((response : Response) => response.json().id);
  }

  public deleteSpell(id : number) : Observable<void> {
    return this.authHttp.post(this.actionUrl + '/del/', JSON.stringify({ "id" : id}), { headers : this.headers })
      .map((response : Response) => (null));
  }
}
