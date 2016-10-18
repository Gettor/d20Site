import { Component, Input } from '@angular/core';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-finder-element',
  template : `
      <li
        class="list-group-item spell-title"
        (click)="onClick()"
      >{{spell.name}}
      </li>
      <li class="list-group-item list-group-item-info" *ngIf="clicked">{{ spell.description }}</li>
  `,
  styles : [
    ':host .spell-title { cursor: pointer; }',
  ],
})

export class SpellFinderElementComponent {
  @Input() spell : Spell;

  private clicked = false;

  onClick() {
    this.clicked = !this.clicked;
  }

}
