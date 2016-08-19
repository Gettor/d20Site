import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { DataService } from './data.service';

@NgModule({
  imports : [ BrowserModule ],
  declarations : [ IndexComponent ],
  exports : [ IndexComponent ]
})

export class IndexModule { }
