import { Component, Input } from '@angular/core';
import { Miniature } from './../shared/miniature/miniature';

@Component({
   selector : 'spell-miniatures',
   template : `
    <div class="tab-content">
      <miniature-container [miniatures]="spells"></miniature-container>
    </div>
   `
})

export class SpellMiniaturesComponent {
  @Input() spells : Miniature[];
}
