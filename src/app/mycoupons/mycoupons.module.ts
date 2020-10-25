import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycouponsPageRoutingModule } from './mycoupons-routing.module';

import { MycouponsPage } from './mycoupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycouponsPageRoutingModule
  ],
  declarations: [MycouponsPage]
})
export class MycouponsPageModule {}
