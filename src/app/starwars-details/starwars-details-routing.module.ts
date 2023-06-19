import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarwarsDetailsPage } from './starwars-details.page';

const routes: Routes = [
  {
    path: '',
    component: StarwarsDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarwarsDetailsPageRoutingModule {}
