import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../../spells/spell';

@Component({
  selector : 'spell-finder',
  template : `
    <tabset [pills]="true">
      <tab [disabled]="false"><span *tabHeading><b>Name</b></span>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>Level</b></span>
        <spell-level-finder [spells]="spells"></spell-level-finder>
      </tab>
      <tab [disabled]="false"><span *tabHeading><b>Type</b></span>
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
