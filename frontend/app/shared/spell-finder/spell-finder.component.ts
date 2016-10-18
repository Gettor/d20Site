import { Component, Input } from '@angular/core';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-finder',
  template : `
    <div class="list-group">
      <button
        type="button"
        *ngFor="let spell of spells"
        class="btn list-group-item"
      >{{spell.name}}
      </button>
    </div>
  `,
  styles : [
    ':host .list-group .list-group-item { text-align: center; }'
  ],
})

export class SpellFinderComponent {
  @Input() spells : Spell[];
}
