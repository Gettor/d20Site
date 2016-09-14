import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Monster } from './monster';
import { MonstersService } from './monsters.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

@Component({
   selector : 'show-monster',
   templateUrl : 'app/monsters/show-monster.component.html',
})

export class ShowMonsterComponent implements OnInit {
  @Input() monster : Monster = new Monster();

  sub : Subscription;

  constructor(private route : ActivatedRoute, private router : Router, private monstersService : MonstersService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        this.monster = monster;
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
      .subscribe();
  }

  onDeleteMonster() {
    this.monstersService.deleteMonster(this.monster.id)
      .subscribe(() => {
        this.router.navigateByUrl('monsters/find');
      });
  }
}
