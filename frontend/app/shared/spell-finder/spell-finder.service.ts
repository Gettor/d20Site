import { Injectable } from '@angular/core';
import { Spell } from './../../spells/spell'


@Injectable()
export class SpellFinderService {

  public getSpellsWithLevel(level : number, spells : Spell[]) : Spell[] {
    var result : Spell[] = [];
    console.log(spells);
    for (let spell of spells) {
      console.log(spell);
      if (spell.level == level) {
        result.push(spell);
      }
    }
    return result;
  }
}
