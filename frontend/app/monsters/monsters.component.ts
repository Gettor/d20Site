import { Component } from '@angular/core';
import { Monster } from './monster';

@Component({
   selector : 'my-monsters',
   template : `
      <router-outlet></router-outlet>
   `
})

export class MonstersComponent {
}
