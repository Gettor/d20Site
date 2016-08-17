import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';

@NgModule({
  imports : [ BrowserModule, HttpModule, LoginModule ],
  declarations : [ AppComponent ],
  providers : [
    { provide : 'API_ENDPOINT',  useValue : 'http://192.168.0.101:1337/api'}
  ],
  bootstrap : [ AppComponent ]
})

export class AppModule {}
