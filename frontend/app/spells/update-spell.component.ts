import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Spell } from './spell';
import { Monster } from '../monsters/monster';
import { SpellsService } from './spells.service';
import { MonstersService } from '../monsters/monsters.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

var saveTypes = {
   0: [ "No save" ],
   1: [ "Fortitude" ],
   2: [ "Reflex" ],
   3: [ "Will"]
};

@Component({
   selector : 'update-spell',
   templateUrl : 'app/spells/update-spell.component.html',
})

export class UpdateSpellComponent implements OnInit {
  @Input() spell : Spell = new Spell();
  monster : Monster = new Monster();
  monsterUrl : string = "monsters/show/";

  sub : Subscription;

  constructor(private route : ActivatedRoute, private router : Router, private spellsService : SpellsService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getSpell(+params['id'])))
      .concatAll()
      .subscribe(spell => {
        this.spell = spell;
        this.spell.save_type = saveTypes[spell.save_type];
        console.log(spell);
    });
    this.sub = this.route.params
      .map((params : any) => (this.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        this.monster = monster;
        this.monsterUrl = this.monsterUrl + String(monster.id);
        console.log(monster);
        console.log(this.monsterUrl);
    });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  getSpell(id : number) : Observable<Spell> {
    return this.spellsService.getSpell(id);
  }

  getMonster(id : number) : Observable<Monster> {
    return this.spellsService.getMonster(id);
  }

  onUpdateSpell() {
    this.spellsService.updateSpell(this.spell)
      .subscribe();
    alert("Update complete");
  }

  onDeleteSpell() {
    this.spellsService.deleteSpell(this.spell.id)
      .subscribe(() => {
        this.router.navigateByUrl('spells/find');
      });
  }
}