import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show/show-monster.component';

@NgModule({
  imports : [ BrowserModule ],
  declarations : [
    MonstersComponent,
    ShowMonsterComponent,
  ],
  exports : [ MonstersComponent ]
})

export class MonstersModule { }
