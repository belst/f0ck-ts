import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list/1',
    pathMatch: 'full'
  },
  {
    path: 'list/:page',
    component: ItemListComponent
  },
  {
    path: ':id',
    component: ItemComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
