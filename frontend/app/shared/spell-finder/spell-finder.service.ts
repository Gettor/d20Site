import { Injectable } from '@angular/core';
import { Spell } from './../../spells/spell'


@Injectable()
export class SpellFinderService {

  public getSpellsWithLevel(level : number, spells : Spell[]) : Spell[] {
    var result : Spell[] = [];
    for (let spell of spells) {
      if (spell.level == level) {
        result.push(spell);
      }
    }
    return result;
  }
}
