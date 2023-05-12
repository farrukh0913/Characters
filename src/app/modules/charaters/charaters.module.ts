import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharatersRoutingModule } from './charaters-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharatersRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})

export class CharatersModule { }