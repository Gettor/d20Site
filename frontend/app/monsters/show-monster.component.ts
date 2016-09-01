import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Monster } from './monster';
import { MonstersService } from './monsters.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

@Component({
   selector : 'show-monster',
   template : `
    <center>
    <div class="panel panel-default">
     <div class="panel-heading"><h2>{{ monster.name }}</h2></div>
     <div class="panel-body">
       <div class="table-responsive">
       <table class="table table-striped"><tbody>
       <tr>
         <td style="text-align:center"><b>Speed</b></td>
         <td style="text-align:center">{{ monster.speed }}</td>
         <td style="text-align:center">
           <edit-modal
             [label]="'Speed'"
             [inputType]="'number'"
             [value]="monster.speed"
             (newValue)="monster.speed=$event">
           </edit-modal>
         </td>
       </tr>
       <tr>
         <td style="text-align:center"><b>Initiative</b></td>
         <td style="text-align:center">{{ monster.initiative }}</td>
         <td style="text-align:center">
           <edit-modal
             [label]="'Initiative'"
             [inputType]="'number'"
             [value]="monster.initiative"
             (newValue)="monster.initiative=$event">
           </edit-modal>
         </td>
       </tr>
       </tbody></table></div>
     </div>
     <div class="panel-footer">
       <button class="btn btn-default">Delete</button>
     </div>
    </div>
    </center>
   `
})

export class ShowMonsterComponent implements OnInit {
  @Input() monster : Monster = new Monster();

  sub : Subscription;

  constructor(private route : ActivatedRoute, private monstersService : MonstersService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        this.monster = monster;
    });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  getMonster(id : number) : Observable<Monster> {
    return this.monstersService.getMonster(id)
  }
}
