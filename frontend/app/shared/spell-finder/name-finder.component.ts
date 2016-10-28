import { Component, Input, OnChanges } from '@angular/core';
import { SpellFinderService } from './spell-finder.service';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-name-finder',
  template : `
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Spell name" [(ngModel)]="searchPattern" name="spellName">
        </div>
      </form>
      <spell-finder-element *ngFor="let spell of spells" [spell]="spell"></spell-finder-element>
  `
})

export class NameFinderComponent implements OnChanges {
  @Input() spells : Spell[];

  private searchPattern : string;

  constructor(private spellFinderService : SpellFinderService) {
  }

  ngOnChanges(changes : any) {
    let spells = changes['spells'].currentValue;
    if (spells) {
      this.applyPattern();
      spells.sort(function(a, b) {
        return a.name > b.name;
      });
    }
  }

  applyPattern() {
    if (this.searchPattern && this.searchPattern != '') {
      console.log(this.searchPattern);
      console.log('aaa');
      this.spells.filter(e => {
        return e.name.indexOf(this.searchPattern) !== -1;
      });
    }
  }
}
