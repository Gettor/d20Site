import { Component, Input } from '@angular/core';
import { Miniature } from './../shared/miniature/miniature';

@Component({
   selector : 'spell-miniatures',
   template : `
    <miniature-container
      [miniatures]="spells"
      [miniatureClass]="'col-md-12'"
      [itemsPerPage]="4"
   ></miniature-container>
   `
})

export class SpellMiniaturesComponent {
  @Input() spells : Miniature[];
}
