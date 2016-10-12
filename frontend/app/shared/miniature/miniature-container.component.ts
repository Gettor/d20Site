import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-container',
   template : `
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3" *ngFor="let miniature of miniatures
               | paginate : { itemsPerPage : 16, currentPage : p}">
                     <miniature-show [miniature]="miniature"></miniature-show>
              </div>
          </div>
          <div class="row" style="text-align:center">
              <pagination-controls *ngIf="miniatures && miniatures.length > 0" (pageChange)="p = $event"></pagination-controls>
          </div>
      </div>
   `
})

export class MiniatureContainerComponent {
   @Input() miniatures : Miniature[];
}
