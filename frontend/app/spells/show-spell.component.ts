import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Spell } from './spell';
import { SpellsService } from './spells.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';

@Component({
   selector : 'show-spell',
   templateUrl : 'app/spells/show-spell.component.html',
})

export class ShowSpellComponent implements OnInit {
  @Input() spell : Spell = new Spell();

  sub : Subscription;

  constructor(private route : ActivatedRoute, private router : Router, private spellsService : SpellsService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .map((params : any) => (this.getSpell(+params['id'])))
      .concatAll()
      .subscribe(spell => {
        this.spell = spell;
    });
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  getSpell(id : number) : Observable<Spell> {
    return this.spellsService.getSpell(id)
  }

  onUpdateSpell() {
    this.spellsService.updateSpell(this.spell)
      .subscribe();
  }

  onDeleteSpell() {
    this.spellsService.deleteSpell(this.spell.id)
      .subscribe(() => {
        this.router.navigateByUrl('spells/find');
      });
  }
}
