import { Routes, RouterModule } from '@angular/router';
import { SpellsComponent } from './spells.component';
import { ShowSpellComponent } from './show-spell.component';
import { UpdateSpellComponent } from './update-spell.component';
// import { AddSpellComponent } from './add-spell.component';
// import { FindSpellsComponent } from './find-spells.component';

const spellsRoutes: Routes = [
  {
    path: 'spells',
    component: SpellsComponent,
  },
  {
    path: 'spells/show/:id',
    component: ShowSpellComponent,
  },
  {
    path: 'spells/update/:id',
    component: UpdateSpellComponent,
  },
  // {
  //   path: 'spells/add',
  //   component: AddSpellComponent,
  // },
  // {
  //   path : 'spells/find',
  //   component : FindSpellsComponent,
  // },
];

export const spellsRouting = RouterModule.forChild(spellsRoutes);
