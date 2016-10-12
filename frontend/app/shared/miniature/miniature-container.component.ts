import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-container',
   template : `
       <div class="row">
           <div [ngClass]="miniatureClass" *ngFor="let miniature of miniatures
            | paginate : { itemsPerPage : itemsPerPage , currentPage : p}">
                  <miniature-show [miniature]="miniature"></miniature-show>
           </div>
       </div>
       <div class="row" style="text-align:center">
           <pagination-controls *ngIf="miniatures && miniatures.length > 0" (pageChange)="p = $event"></pagination-controls>
       </div>
   `
})

export class MiniatureContainerComponent {
   @Input() miniatures : Miniature[];
   @Input() miniatureClass : string = 'col-md-3';
   @Input() itemsPerPage : number = 16;
}
