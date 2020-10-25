import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNoticeIntPage } from './add-notice-int.page';

const routes: Routes = [
  {
    path: '',
    component: AddNoticeIntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNoticeIntPageRoutingModule {}
