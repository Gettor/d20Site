import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth-guard';
import { MonstersComponent } from './monsters.component';
import { ShowMonsterComponent } from './show-monster.component';
import { AddMonsterComponent } from './add-monster.component';
import { UpdateMonsterComponent } from './update-monster.component';
import { FindMonstersComponent } from './find-monsters.component';

const monstersRoutes: Routes = [
  {
    path: 'monsters',
    component: MonstersComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'monsters/show/:id',
    component: ShowMonsterComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'monsters/add',
    component: AddMonsterComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'monsters/update/:id',
    component: UpdateMonsterComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path : 'monsters/find',
    component : FindMonstersComponent,
    canActivate: [ AuthGuard ],
  },
];

export const monstersRouting = RouterModule.forChild(monstersRoutes);
