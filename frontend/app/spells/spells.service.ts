import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Spell } from './spell'

@Injectable()
export class SpellsService {

  private actionUrl : string;
  private headers : Headers;

  constructor(private _http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/spells';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getSpell(id : number) : Observable<Spell> {
    return this._http.get(this.actionUrl + '/get/' + id)
      .map((response : Response) => (<Spell>response.json()));
  }

  public updateSpell(spell : Spell) : Observable<void> {
    return this._http.post(this.actionUrl + '/update/', JSON.stringify(spell), { headers : this.headers })
      .map((response : Response) => (null));
  }

  public addSpell(spell : Spell) : Observable<number> {
    return this._http.post(this.actionUrl + '/add/', JSON.stringify(spell), { headers : this.headers })
      .map((response : Response) => response.json().id);
  }

  public deleteSpell(id : number) : Observable<void> {
    return this._http.post(this.actionUrl + '/del/', JSON.stringify({ "id" : id}), { headers : this.headers })
      .map((response : Response) => (null));
  }
}
