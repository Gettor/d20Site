import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Monster } from '../shared/model/monster';
import { MonstersService } from './monsters.service';

@Component({
   selector : 'update-monster',
   templateUrl : 'app/monsters/add-monster.component.html',
})

export class UpdateMonsterComponent implements OnInit {
  private monster : Monster = new Monster();
  private sub : Subscription;
  private operationType : string = "Update";

  constructor(private monstersService : MonstersService, private titleService : Title, private router : Router, private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.monstersService.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        this.monster = monster;
        this.titleService.setTitle( "d20Site - Update Monsters - " + this.monster.name );
    });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    //this.monstersService.addMonster(this.monster)
      //.subscribe((newId : number) => {
        //this.router.navigateByUrl('/monsters/show/' + newId.toString());
      //});
  }
}
