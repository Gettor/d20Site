import { Component } from '@angular/core';
import { CompleterData } from 'ng2-completer';
import { MonstersService } from './monsters.service';

@Component({
   selector : 'find-monsters',
   template : `
      <h1>Find monsters</h1>
      <ng2-completer [(ngModel)]="searchStr" [dataService]="findService" [minSearchLength]="0"></ng2-completer>
   `
})

export class FindMonstersComponent {
   private searchStr: string;
   private findService : CompleterData;

   constructor(private monstersService: MonstersService) {
      this.findService = monstersService.getFindService();
   }
}

