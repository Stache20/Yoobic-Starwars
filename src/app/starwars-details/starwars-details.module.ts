import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarwarsDetailsPageRoutingModule } from './starwars-details-routing.module';

import { StarwarsDetailsPage } from './starwars-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarwarsDetailsPageRoutingModule,
  ],
  declarations: [StarwarsDetailsPage],
})
export class StarwarsDetailsPageModule {}
