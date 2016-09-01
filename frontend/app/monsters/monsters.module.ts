import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { monstersRouting } from './monsters.routing';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show-monster.component';
import { FindMonstersComponent } from './find-monsters.component';
import { MonstersService } from './monsters.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports : [
    BrowserModule,
    SharedModule,
    monstersRouting,
  ],
  declarations : [
    MonstersComponent,
    ShowMonsterComponent,
    FindMonstersComponent,
  ],
  providers : [
    MonstersService
  ],
  exports : [
    MonstersComponent,
    FindMonstersComponent,
  ]
})

export class MonstersModule { }
