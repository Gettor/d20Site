import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Monster } from '../shared/model/monster';
import { MonstersService } from './monsters.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

@Component({
   selector : 'show-monster',
   templateUrl : 'app/monsters/show-monster.component.html',
   styles : [
     ':host table tbody tr td { text-align:center; }',
   ],
})

export class ShowMonsterComponent implements OnInit {
  monster : Monster = new Monster();

  sub : Subscription;

  constructor(private route : ActivatedRoute, private router : Router, private titleService: Title, private monstersService : MonstersService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        this.monster = monster;
        this.titleService.setTitle( "d20Site - View Monsters - " + this.monster.name );
    });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  getMonster(id : number) : Observable<Monster> {
    return this.monstersService.getMonster(id)
  }

  onUpdateMonster() {
    this.monstersService.updateMonster(this.monster)
      .subscribe(() => (this.router.navigateByUrl('monsters/update/' + this.monster.id)));
  }

  onDeleteMonster() {
    this.monstersService.deleteMonster(this.monster.id)
      .subscribe(() => ( this.router.navigateByUrl('monsters/find')));
  }
}
