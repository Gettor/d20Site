import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-finder',
  template : `
    <tabset [pills]="true">
      <tab [disabled]="false"><span *tabHeading><b>*</b></span>
        <div class="list-group">
          <spell-finder-element *ngFor="let spell of spells" [spell]="spell"></spell-finder-element>
        </div>
      </tab>
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
  styles : [
    ':host /deep/ .list-group .list-group-item { text-align: center; }'
  ],
})

export class SpellFinderComponent implements OnInit {
  @Input() spells : Spell[];

  private spellsByLevel : Spell[][] = [];

  constructor() {
    // TODO: split spells by level
    this.spellsByLevel[0] = [];
    this.spellsByLevel[1] = [];
    this.spellsByLevel[2] = [];
    this.spellsByLevel[3] = [];
    this.spellsByLevel[4] = [];
    this.spellsByLevel[5] = [];
    this.spellsByLevel[6] = [];
    this.spellsByLevel[7] = [];
    this.spellsByLevel[8] = [];
    this.spellsByLevel[9] = [];
  }

  ngOnInit() {
  }
}
