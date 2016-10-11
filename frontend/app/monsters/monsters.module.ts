import { NgModule } from '@angular/core';
import { Title, BrowserModule } from '@angular/platform-browser';
import { monstersRouting } from './monsters.routing';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show-monster.component';
import { SpellMiniaturesComponent } from './spell-miniatures.component';
import { AddMonsterComponent } from './add-monster.component';
import { FindMonstersComponent } from './find-monsters.component';
import { MonstersService } from './monsters.service';
import { SharedModule } from '../shared/shared.module';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  imports : [
    BrowserModule,
    SharedModule,
    Ng2CompleterModule,
    monstersRouting,
  ],
  declarations : [
    MonstersComponent,
    ShowMonsterComponent,
    AddMonsterComponent,
    FindMonstersComponent,
    SpellMiniaturesComponent,
  ],
  providers : [
    Title,
    MonstersService
  ],
})

export class MonstersModule { }
