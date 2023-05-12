import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const detailsPageroutes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'character-detail',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(detailsPageroutes)],
  exports: [RouterModule]
})

export class CharatersRoutingModule { }