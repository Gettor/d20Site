import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterData } from 'ng2-completer';
import { Title } from '@angular/platform-browser';
import { MonstersService } from './monsters.service';
import { Miniature } from './../shared/miniature/miniature';

@Component({
   selector : 'find-monsters',
   template : `
      <div class="container center-block">
         <div class="row"><div class="col-md-12">
            <form>
               <ng2-completer [(ngModel)]="searchStr" (selected)="onSubmit($event)" [dataService]="findService" [minSearchLength]="1" name="autocomplete"></ng2-completer>
            </form>
         </div></div>
      </div>
      <miniature-container [miniatures]="monsterMiniatures"></miniature-container>
   `,
   styles : [
      ':host /deep/ .completer-input { width: 100%; }',
      ':host /deep/ .completer-dropdown { width : 100% !important;}',
   ]
})

export class FindMonstersComponent {
   private searchStr: string;
   private findService : CompleterData;
   private temporaryMiniatures : Miniature[];
   private monsterMiniatures : Miniature[];

   constructor(private titleService: Title, private monstersService: MonstersService, private router : Router) {
      this.titleService.setTitle( "d20Site - Find Monsters" );
      this.findService = monstersService.getFindService();
      monstersService.findResults().subscribe((miniatures : Miniature[]) => {
         this.monsterMiniatures = miniatures;
      });
   }

   onSubmit(selected : any) {
      let monsterId : number = this.monstersService.extractId(selected);
      this.router.navigateByUrl('/monsters/show/' + monsterId);
   }
}

