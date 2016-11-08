import { Component, Input, OnChanges } from '@angular/core';
import { SpellFinderService } from './spell-finder.service';
import { Spell } from '../model/spell';

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
      spells.sort(this.sortSpells);
      this.filteredSpells = spells;
    }
  }

  applyPattern(searchPattern : string) {
    if (searchPattern && searchPattern != '') {
      this.filteredSpells = this.spells.filter(e => {
        return e.name.toLowerCase().indexOf(searchPattern.toLowerCase()) !== -1;
      });
      this.filteredSpells.sort(this.sortSpells);
    }
    else {
      this.filteredSpells = this.spells;
    }
  }

  private sortSpells(a : Spell, b : Spell) : number {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  }
}
