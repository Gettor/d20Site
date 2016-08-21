import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
   selector : 'show-monster',
   template : `
    <center>
    <div class="panel panel-default">
     <div class="panel-heading"><h2>{{ monster.name }}</h2></div>
     <div class="panel-body">
       <table class="table table-striped"><tbody>
       <tr>
         <td style="text-align:right"><b>Speed</b></td>
         <td style="text-align:left">{{ monster.speed }}</td>
       </tr>
       <tr>
         <td style="text-align:right"><b>Initiative</b></td>
         <td style="text-align:left">{{ monster.initiative }}</td>
       </tr>
       </tbody></table>
     </div>
     <div class="panel-footer">
       <button class="btn btn-default">Edit</button>
       <button class="btn btn-default">Delete</button>
     </div>
    </div>
    </center>
   `
})

export class ShowMonsterComponent {
  @Input() monster : Monster;
}
