import { Routes, RouterModule } from '@angular/router';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show/show-monster.component';
import { FindMonstersComponent } from './find-monsters.component';

const monstersRoutes: Routes = [
  {
    path: 'monsters',
    component: MonstersComponent,
  },
  {
    path: 'monsters/show/:id',
    component: ShowMonsterComponent,
  },
  {
    path : 'monsters/find',
    component : FindMonstersComponent,
  },
];

export const monstersRouting = RouterModule.forChild(monstersRoutes);
