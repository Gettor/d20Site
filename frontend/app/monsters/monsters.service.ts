import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Monster } from './monster'
import { Miniature } from './../shared/miniature/miniature';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Injectable()
export class MonstersService {

  private actionUrl : string;
  private headers : Headers;
  private completerData : CompleterData;

  constructor(private http : Http, @Inject('API_ENDPOINT') private apiEndpoint : string, private completerService : CompleterService) {
    this.actionUrl = apiEndpoint + '/monsters';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.completerData = this.completerService.remote(this.actionUrl + '/find?searchstr=', 'name', 'name');
  }

  public getMonster(id : number) : Observable<Monster> {
    return this.http.get(this.actionUrl + '/get/' + id)
      .map((response : Response) => (<Monster>response.json()));
  }

  public updateMonster(monster : Monster) : Observable<void> {
    return this.http.post(this.actionUrl + '/update/', JSON.stringify(monster), { headers : this.headers })
      .map((response : Response) => (null));
  }

  public addMonster(monster : Monster) : Observable<number> {
    return this.http.post(this.actionUrl + '/add/', JSON.stringify(monster), { headers : this.headers })
      .map((response : Response) => response.json().id);
  }

  public deleteMonster(id : number) : Observable<void> {
    return this.http.post(this.actionUrl + '/del/', JSON.stringify({ "id" : id}), { headers : this.headers })
      .map((response : Response) => (null));
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
            new Miniature(singleData.originalObject.name, 'bbb', 'none'));
        }
        return result;
      });
  }
}
