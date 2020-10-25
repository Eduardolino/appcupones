import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNoticeNalPageRoutingModule } from './add-notice-nal-routing.module';

import { AddNoticeNalPage } from './add-notice-nal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNoticeNalPageRoutingModule
  ],
  declarations: [AddNoticeNalPage]
})
export class AddNoticeNalPageModule {}
