import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./notice/notice.module').then( m => m.NoticePageModule)
  },
  {
    path: 'notice-i',
    loadChildren: () => import('./notice-i/notice-i.module').then( m => m.NoticeIPageModule)
  },
  {
    path: 'add-notice-int',
    loadChildren: () => import('./add-notice-int/add-notice-int.module').then( m => m.AddNoticeIntPageModule)
  },
  {
    path: 'add-notice-nal',
    loadChildren: () => import('./add-notice-nal/add-notice-nal.module').then( m => m.AddNoticeNalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'tent',
    loadChildren: () => import('./tent/tent.module').then( m => m.TentPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'today',
    loadChildren: () => import('./today/today.module').then( m => m.TodayPageModule)
  },
  {
    path: 'mycoupons',
    loadChildren: () => import('./mycoupons/mycoupons.module').then( m => m.MycouponsPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
