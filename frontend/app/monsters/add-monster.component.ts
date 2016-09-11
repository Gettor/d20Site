import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Monster } from './monster';
import { MonstersService } from './monsters.service';

@Component({
   selector : 'add-monster',
   templateUrl : 'app/monsters/add-monster.component.html',
})

export class AddMonsterComponent {
  monster : Monster = new Monster();

  constructor(private monstersService : MonstersService, private router : Router) {
  }

  onSubmit() {
    this.monstersService.addMonster(this.monster)
      .subscribe((newId : number) => {
        this.router.navigateByUrl('/monsters/show/' + newId.toString());
      });
  }
}
