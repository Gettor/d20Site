import { Component, OnInit } from '@angular/core';
import { DataService } from './app.service';
import { Item } from './app.item';

@Component({
  selector : 'my-app',
  providers : [ DataService ],
  template : `
    <my-login></my-login>
    <h1>My First Angular 2 App</h1>
    <h2>Database fetch:</h2>
    <p *ngFor='let key of items'>
      {{ key.name }}
    </p>
  `
})

export class AppComponent implements OnInit {
  public items : Item[];

  constructor(private _dataService : DataService) {}

  ngOnInit() {
    this.getItems();
  }

  private getItems() {
    this._dataService
      .Get()
      .subscribe((data : Item[]) => this.items = data,
        error => console.log(error),
        () => console.log('Get complete'));
  }
}
