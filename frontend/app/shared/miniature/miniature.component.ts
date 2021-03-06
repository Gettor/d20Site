import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-show',
   template : `
      <div class="panel panel-default hover-highlight" (click)="onClick()">
         <div class="panel-heading">{{ miniature.header }}</div>
         <div class="panel-body">
            {{ miniature.data }}
         </div>
      </div>
   `,
   styles : [
      ':host .hover-highlight:hover { border-color: black; border-size: 40px; }',
   ]
})

export class MiniatureComponent {
   @Input() miniature : Miniature;

   constructor(private router : Router) {
   }

   onClick() {
      this.router.navigateByUrl(this.miniature.redirectUrl);
   }
}
