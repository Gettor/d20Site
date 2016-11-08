import { Component, Input, OnChanges } from '@angular/core';
import { SpellFinderService } from './spell-finder.service';
import { Spell } from '../model/spell';

@Component({
  selector : 'spell-type-finder',
  template : `
    <tabset [pills]="true">
      <tab [disabled]="false" *ngFor="let type of keys()"><span *tabHeading><b>{{ type }}</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByType[type]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
    </tabset>
  `
})

export class TypeFinderComponent implements OnChanges {
  @Input() spells : Spell[];

  spellsByType : { [ type : string ] : Spell[] } = {};

  constructor(private spellFinderService : SpellFinderService) {
  }

  ngOnChanges(changes : any) {
    let spells = changes['spells'].currentValue;
    if (spells) {
      for (let spell of spells) {
        let spellType = spell.SpellType.name;
        if (!this.spellsByType[spellType]) {
          this.spellsByType[spellType] = []
        }
        this.spellsByType[spellType].push(spell);
      }
    }
  }

  private keys() : Array<string> {
    return Object.keys(this.spellsByType);
  }
}
