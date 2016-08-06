import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide('API_ENDPOINT', { useValue : 'http://localhost:1337/api'})
]);
