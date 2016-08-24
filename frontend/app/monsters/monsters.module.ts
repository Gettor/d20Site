import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show/show-monster.component';
import { FindMonstersComponent } from './find-monsters.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports : [ BrowserModule, SharedModule ],
  declarations : [
    MonstersComponent,
    ShowMonsterComponent,
    FindMonstersComponent,
  ],
  exports : [
    MonstersComponent,
    FindMonstersComponent,
  ]
})

export class MonstersModule { }
