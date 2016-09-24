import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-container',
   template : `
      <miniature-show *ngFor="let miniature of miniatures"
         [miniature]="miniature">
      </miniature-show>
   `
})

export class MiniatureContainerComponent {
   @Input() miniatures : Miniature[];
}
