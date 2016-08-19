import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';
import { MonstersModule } from './monsters/monsters.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports : [
    BrowserModule,
    HttpModule,
    IndexModule,
    LoginModule,
    MonstersModule,
    routing
  ],
  declarations : [ AppComponent ],
  providers : [
    appRoutingProviders,
    { provide : 'API_ENDPOINT',  useValue : 'http://192.168.0.101:1337/api'}
  ],
  bootstrap : [ AppComponent ]
})

export class AppModule {}
