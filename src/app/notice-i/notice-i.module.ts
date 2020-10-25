import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeIPageRoutingModule } from './notice-i-routing.module';

import { NoticeIPage } from './notice-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeIPageRoutingModule
  ],
  declarations: [NoticeIPage]
})
export class NoticeIPageModule {}
