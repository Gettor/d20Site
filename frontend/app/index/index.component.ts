import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
   selector : 'my-index',
   providers : [ DataService ],
   template : `
      <h1>Welcome to d20Site!</h1>
   `
})

export class IndexComponent {
  constructor(private _dataService : DataService) {}
}
