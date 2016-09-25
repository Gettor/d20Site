import { Component } from '@angular/core';
import { CompleterData } from 'ng2-completer';
import { MonstersService } from './monsters.service';
import { Miniature } from './../shared/miniature/miniature';

@Component({
   selector : 'find-monsters',
   template : `
      <h1>Find monsters</h1>
      <form (ngSubmit)="onSubmit()">
         <ng2-completer [(ngModel)]="searchStr" [dataService]="findService" [minSearchLength]="0" name="autocomplete"></ng2-completer>
      </form>
      <miniature-container [miniatures]="monsterMiniatures"></miniature-container>
   `
})

export class FindMonstersComponent {
   private searchStr: string;
   private findService : CompleterData;
   private monsterMiniatures : Miniature[];

   constructor(private monstersService: MonstersService) {
      this.findService = monstersService.getFindService();
      monstersService.findResults().subscribe((miniatures : Miniature[]) => {
         this.monsterMiniatures = miniatures;
      });
   }

   onSubmit() {
      return;
   }
}

