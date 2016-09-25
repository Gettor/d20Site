import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { spellsRouting } from './spells.routing';
import { SpellsComponent } from './spells.component';
import { ShowSpellComponent } from './show-spell.component';
import { UpdateSpellComponent } from './update-spell.component';
// import { AddSpellsComponent } from './add-spell.component';
// import { FindSpellsComponent } from './find-spells.component';
import { SpellsService } from './spells.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports : [
    BrowserModule,
    SharedModule,
    spellsRouting,
  ],
  declarations : [
    SpellsComponent,
    ShowSpellComponent,
    UpdateSpellComponent,
    // AddSpellsComponent,
    // FindSpellsComponent,
  ],
  providers : [
    SpellsService
  ]
})

export class SpellsModule { }
