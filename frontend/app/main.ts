import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core'
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [
  // NOTE: change this value to fit your environment
  provide('API_ENDPOINT', { useValue : 'http://192.168.0.101:1337/api'})
]);
