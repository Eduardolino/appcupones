import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNoticeNalPage } from './add-notice-nal.page';

const routes: Routes = [
  {
    path: '',
    component: AddNoticeNalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNoticeNalPageRoutingModule {}
