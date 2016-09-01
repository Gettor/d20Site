import { Component } from '@angular/core';
import { Monster } from './monster';
import { MonstersService } from './monsters.service';

@Component({
   selector : 'add-monster',
   templateUrl : 'app/monsters/add-monster.component.html',
})

export class AddMonsterComponent {
  monster : Monster = new Monster();

  constructor(private monstersService : MonstersService) {
  }

  onSubmit() {
    this.monstersService.addMonster(this.monster)
      .subscribe();
  }
}
