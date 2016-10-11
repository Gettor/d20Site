import { Component, Input } from '@angular/core';
import { SpellInfo } from './spell-info';

@Component({
   selector : 'spell-miniatures',
   template : `
    <div class="container">
      {{ spells }}
    </div>
   `
})

export class SpellMiniaturesComponent {
  @Input() spells : SpellInfo[];
}
