import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show/show-monster.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports : [ BrowserModule, SharedModule ],
  declarations : [
    MonstersComponent,
    ShowMonsterComponent,
  ],
  exports : [ MonstersComponent ]
})

export class MonstersModule { }
