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

  ngOnInit() {
  }
}
