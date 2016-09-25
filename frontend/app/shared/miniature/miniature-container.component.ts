import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-container',
   template : `
      <div class="container">
          <div class="row">
              <div class="col-md-3" *ngFor="let miniature of miniatures">
                  <miniature-show [miniature]="miniature">
                  </miniature-show>
              </div>
          </div>
      </div>
   `
})

export class MiniatureContainerComponent {
   @Input() miniatures : Miniature[];
}
