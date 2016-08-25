import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {
    path : '',
    component : IndexComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
