import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Monster } from '../shared/model/monster';
import { MonstersService } from './monsters.service';

@Component({
   selector : 'add-monster',
   templateUrl : 'app/monsters/add-monster.component.html',
})

export class AddMonsterComponent {
  monster : Monster = new Monster();

  constructor(private monstersService : MonstersService, private titleService : Title, private router : Router) {
  }

  ngOnInit() {
    this.titleService.setTitle( "d20Site - Add Monster" );
  }
  onSubmit() {
    this.monstersService.addMonster(this.monster)
      .subscribe((newId : number) => {
        this.router.navigateByUrl('/monsters/show/' + newId.toString());
      });
  }
}
