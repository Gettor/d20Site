import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from './monsters.component';

@NgModule({
  imports : [ BrowserModule ],
  declarations : [ MonstersComponent ],
  exports : [ MonstersComponent ]
})

export class MonstersModule { }
