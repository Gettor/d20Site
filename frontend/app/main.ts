import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  // NOTE: change this value to fit your environment
  provide('API_ENDPOINT', { useValue : 'http://192.168.0.101:1337/api'})
]);
