import { Component, Input, OnChanges } from '@angular/core';
import { SpellFinderService } from './spell-finder.service';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-name-finder',
  template : `
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Spell name"
            [ngModel]="searchPattern"
            (ngModelChange)="applyPattern($event)"
            name="spellName">
        </div>
      </form>
      <spell-finder-element *ngFor="let spell of filteredSpells" [spell]="spell"></spell-finder-element>
  `
})

export class NameFinderComponent implements OnChanges {
  @Input() spells : Spell[];

  filteredSpells : Spell[];

  private searchPattern : string;

  constructor(private spellFinderService : SpellFinderService) {
  }

  ngOnChanges(changes : any) {
    let spells = changes['spells'].currentValue;
    if (spells) {
      spells.sort(function(a, b) {
        return a.name > b.name;
      });
      this.filteredSpells = spells;
    }
  }

  applyPattern(searchPattern : string) {
    if (searchPattern && searchPattern != '') {
      // TODO: case insensitive match
      this.filteredSpells = this.spells.filter(e => {
        return e.name.indexOf(searchPattern) !== -1;
      });
    }
    else {
      this.filteredSpells = this.spells;
    }
  }
}
