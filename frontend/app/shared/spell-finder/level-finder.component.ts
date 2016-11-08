import { Component, Input, OnChanges } from '@angular/core';
import { SpellFinderService } from './spell-finder.service';
import { Spell } from '../model/spell';

@Component({
  selector : 'spell-level-finder',
  template : `
    <tabset [pills]="true">
      <tab [disabled]="false"><span *tabHeading><b>0</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[0]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>1</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[1]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>2</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[2]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>3</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[3]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>4</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[4]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>5</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[5]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>6</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[6]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>7</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[7]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>8</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[8]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>9</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spellsByLevel[9]" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
    </tabset>
  `,
})

export class LevelFinderComponent implements OnChanges {
  @Input() spells : Spell[];

  private spellsByLevel : Spell[][] = [];

  constructor(private spellFinderService : SpellFinderService) {
  }

  ngOnChanges(changes : any) {
    let spells = changes['spells'].currentValue;
    if (spells) {
        for (let i = 0; i < 10; i++) {
          this.spellsByLevel[i] = this.spellFinderService.getSpellsWithLevel(i, spells);
        }
    }
  }
}
