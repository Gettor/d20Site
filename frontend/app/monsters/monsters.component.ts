import { Component } from '@angular/core';
import { Monster } from './monster';
@Component({
   selector : 'my-monsters',
   template : `
      <h1>Monsters page</h1>
      <show-monster [monster]="monster">
   `
})

export class MonstersComponent {
  monster : Monster = {
    name : 'Creepy monster',
    speed : 9,
    initiative : 2,
  };
}
