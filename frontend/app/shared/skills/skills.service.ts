import { Injectable, Inject } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/refCount';
import { Skill } from '../model/skill'

@Injectable()
export class SkillsService {

  private actionUrl : string;
  private headers : Headers;
  private skills : Observable<Skill[]>;

  constructor(private authHttp : AuthHttp, @Inject('API_ENDPOINT') private apiEndpoint : string) {
    this.actionUrl = apiEndpoint + '/skills';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.skills = this.authHttp.get(this.actionUrl + '/get')
      .map((response : Response) => (<Skill[]>response.json()))
      .publishReplay(1)
      .refCount();
  }

  public getSkills() : Observable<Skill[]> {
    return this.skills;
  }
}
