import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth-guard';
import { SpellsComponent } from './spells.component';
import { ShowSpellComponent } from './show-spell.component';
import { UpdateSpellComponent } from './update-spell.component';
// import { AddSpellComponent } from './add-spell.component';
// import { FindSpellsComponent } from './find-spells.component';

const spellsRoutes: Routes = [
  {
    path: 'spells',
    component: SpellsComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'spells/show/:id',
    component: ShowSpellComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'spells/update/:id',
    component: UpdateSpellComponent,
    canActivate: [ AuthGuard ],
  },
  // {
  //   path: 'spells/add',
  //   component: AddSpellComponent,
  //   canActivate: [ AuthGuard ],
  // },
  // {
  //   path : 'spells/find',
  //   component : FindSpellsComponent,
  //   canActivate: [ AuthGuard ],
  // },
];

export const spellsRouting : ModuleWithProviders = RouterModule.forChild(spellsRoutes);
