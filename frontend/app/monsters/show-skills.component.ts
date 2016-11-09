import { Component, Input } from '@angular/core';
import { SkillValue } from '../shared/model/skill';

@Component({
   selector : 'show-skills',
   template : `
    <table class="table table-striped">
      <tr *ngFor="let skillValue of skillValues">
        <td>{{ skillValue.Skill.name }}</td>
        <td>{{ skillValue.value}}</td>
      </tr>
    </table>
   `
})

export class ShowSkillsComponent {
  @Input() skillValues : SkillValue[];
}
