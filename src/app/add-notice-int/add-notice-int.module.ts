import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNoticeIntPageRoutingModule } from './add-notice-int-routing.module';

import { AddNoticeIntPage } from './add-notice-int.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNoticeIntPageRoutingModule
  ],
  declarations: [AddNoticeIntPage]
})
export class AddNoticeIntPageModule {}
