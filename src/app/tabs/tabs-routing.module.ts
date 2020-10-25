import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: 'today',
        loadChildren: () => import('../today/today.module').then( m => m.TodayPageModule)
      },
      {
        path: 'mycoupons',
        loadChildren: () => import('../mycoupons/mycoupons.module').then( m => m.MycouponsPageModule)
      },
      {
        path: 'coupons',
        loadChildren: () => import('../coupons/coupons.module').then( m => m.CouponsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/places',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
