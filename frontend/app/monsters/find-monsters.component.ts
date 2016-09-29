import { Component } from '@angular/core';
import { CompleterData } from 'ng2-completer';
import { Title } from '@angular/platform-browser';
import { MonstersService } from './monsters.service';
import { Miniature } from './../shared/miniature/miniature';

@Component({
   selector : 'find-monsters',
   template : `
      <h1>Find monsters</h1>
      <form (ngSubmit)="onSubmit()">
         <ng2-completer [(ngModel)]="searchStr" [dataService]="findService" [minSearchLength]="1" name="autocomplete"></ng2-completer>
      </form>
      <miniature-container [miniatures]="monsterMiniatures"></miniature-container>
   `
})

export class FindMonstersComponent {
   private searchStr: string;
   private findService : CompleterData;
   private temporaryMiniatures : Miniature[];
   private monsterMiniatures : Miniature[];

   constructor(private titleService: Title,
      private monstersService: MonstersService) {
      this.titleService.setTitle( "d20Site - Find Monsters" );
      this.findService = monstersService.getFindService();
      monstersService.findResults().subscribe((miniatures : Miniature[]) => {
         this.temporaryMiniatures = miniatures;
      });
   }

   onSubmit() {
      this.monsterMiniatures = this.temporaryMiniatures;
   }
}

