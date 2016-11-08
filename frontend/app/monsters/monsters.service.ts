import { Injectable, Inject } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Monster } from '../shared/model/monster'
import { Spell } from '../shared/model/spell'
import { Miniature } from './../shared/miniature/miniature';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Injectable()
export class MonstersService {

  private actionUrl : string;
  private headers : Headers;
  private completerData : CompleterData;

  constructor(private authHttp : AuthHttp, @Inject('API_ENDPOINT') private apiEndpoint : string, private completerService : CompleterService) {
    this.actionUrl = apiEndpoint + '/monsters';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    var completerHeaders = this.headers;
    completerHeaders.append('authorization', 'Bearer ' + localStorage.getItem('id_token'));

    var remoteData = this.completerService.remote(this.actionUrl + '/find?searchstr=', 'name', 'name');
    remoteData.headers(completerHeaders);
    this.completerData = remoteData;
  }

  public getMonster(id : number) : Observable<Monster> {
    return this.authHttp.get(this.actionUrl + '/get/' + id)
      .map((response : Response) => (<Monster>response.json()));
  }

  public updateMonster(monster : Monster) : Observable<void> {
    return this.authHttp.post(this.actionUrl + '/update/', JSON.stringify(monster), { headers : this.headers })
      .map((response : Response) => (null));
  }

  public addMonster(monster : Monster) : Observable<number> {
    return this.authHttp.post(this.actionUrl + '/add/', JSON.stringify(monster), { headers : this.headers })
      .map((response : Response) => response.json().id);
  }

  public deleteMonster(id : number) : Observable<void> {
    return this.authHttp.post(this.actionUrl + '/del/', JSON.stringify({ "id" : id}), { headers : this.headers })
      .map((response : Response) => (null));
  }

  public getSpells(id : number) : Observable<Spell[]> {
    return this.authHttp.get(this.actionUrl + '/getSpells/' + id)
      .map((response : Response) => (<Spell[]>response.json()));
  }

  public getFindService() : CompleterData {
    return this.completerData;
  }

  public findResults() : Observable<Miniature[]> {
    return this.completerData
      .map((data : CompleterItem[]) => {
        let result : Miniature[] = [];
        for (let singleData of data) {
          result.push(
            new Miniature(
              singleData.originalObject.name,
              '/monsters/show/' + singleData.originalObject.id,
              'bbb',
              'none'));
        }
        return result;
      });
  }

  public extractId(item : CompleterItem) : number {
    return item.originalObject.id;
  }
}
