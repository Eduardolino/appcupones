import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeIPage } from './notice-i.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeIPageRoutingModule {}
