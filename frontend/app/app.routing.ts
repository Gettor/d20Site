import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MonstersComponent } from './monsters/monsters.component';

const appRoutes : Routes = [
  {
    path : '',
    component : IndexComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'monsters',
    component : MonstersComponent
  },
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
