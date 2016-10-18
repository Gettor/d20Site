import { Component, Input } from '@angular/core';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-finder',
  template : `
    <div class="list-group">
      <spell-finder-element *ngFor="let spell of spells" [spell]="spell"></spell-finder-element>
    </div>
  `,
  styles : [
    ':host /deep/ .list-group .list-group-item { text-align: center; }'
  ],
})

export class SpellFinderComponent {
  @Input() spells : Spell[];
}
