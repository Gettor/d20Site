import { Component } from '@angular/core';
import { Spell } from './spell';

@Component({
   selector : 'my-spells',
   template : `
      <router-outlet></router-outlet>
   `
})

export class SpellsComponent {
}
