import { Component, Input } from '@angular/core';
import { Miniature } from './miniature';

@Component({
   selector : 'miniature-show',
   template : `
    <h3>{{ miniature.header }}</h3>
    {{ miniature.imageUrl }}
    {{ miniature.data }}
   `
})

export class MiniatureComponent {
   @Input() miniature : Miniature;
}
