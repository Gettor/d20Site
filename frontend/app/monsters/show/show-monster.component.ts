import { Component, Input } from '@angular/core';
import { Monster } from '../monster';
//import { EditModalComponent } from '../../shared/edit-modal.component'

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
            (newValue)="updateSpeed($event)">
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
             [value]="monster.initiative"></edit-modal>
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

export class ShowMonsterComponent {
  @Input() monster : Monster;

  updateSpeed(e) {
    this.monster.speed = e;
  }
}
