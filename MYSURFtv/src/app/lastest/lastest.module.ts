import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastestPageRoutingModule } from './lastest-routing.module';

import { LastestPage } from './lastest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastestPageRoutingModule
  ],
  declarations: [LastestPage]
})
export class LastestPageModule {}
