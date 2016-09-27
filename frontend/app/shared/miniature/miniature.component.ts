import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-show',
   template : `
      <div class="panel panel-default" (click)="onClick()">
         <div class="panel-heading">{{ miniature.header }}</div>
         <div class="panel-body">
            {{ miniature.data }}
         </div>
      </div>
   `
})

export class MiniatureComponent {
   @Input() miniature : Miniature;

   constructor(private router : Router) {
   }

   onClick() {
      this.router.navigateByUrl(this.miniature.redirectUrl);
   }
}
