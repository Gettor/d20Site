import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-show',
   template : `
      <div class="panel panel-default">
         <div class="panel-heading">{{ miniature.header }}</div>
         <div class="panel-body">
            {{ miniature.data }}
         </div>
      </div>
   `
})

export class MiniatureComponent {
   @Input() miniature : Miniature;
}
