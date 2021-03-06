import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Spell } from '../shared/model/spell';
import { Monster } from '../shared/model/monster';
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
   selector : 'show-spell',
   templateUrl : 'app/spells/show-spell.component.html',
})

export class ShowSpellComponent implements OnInit {
  @Input() spell : Spell = new Spell();
  monster : Monster = new Monster();
  monsterUrl : string = "monsters/show/";
  updateState : string;

  sub : Subscription;

  constructor(private route : ActivatedRoute, private router : Router, private titleService: Title, private spellsService : SpellsService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getSpell(+params['id'])))
      .concatAll()
      .subscribe(spell => {
        this.spell = spell;
        this.spell.save_type = saveTypes[spell.save_type];
        this.titleService.setTitle( "d20Site - View Spells - " + this.spell.name );
    });
    this.sub = this.route.params
      .map((params : any) => (this.getMonster(+params['id'])))
      .concatAll()
      .subscribe(monster => {
        if (monster.length != 0)
        {
          this.monster = monster[0];
          this.monsterUrl = this.monsterUrl + String(monster[0].id);
        }
    });
    this.updateState = this.route.snapshot.params['updated'];
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  getSpell(id : number) : Observable<Spell> {
    return this.spellsService.getSpell(id);
  }

  getMonster(id : number) : Observable<Monster[]> {
    return this.spellsService.getMonster(id);
  }

  redirectToUpdateSpell() {
    this.router.navigate(['spells/update/', this.spell.id])
  }

  onDeleteSpell() {
    this.spellsService.deleteSpell(this.spell.id)
      .subscribe(() => {
        this.router.navigateByUrl('spells/find');
      });
  }
}
