import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  // {
  //   path: "infos",
  //   component: ,
  //   data: { state: "profilePage" },
  //   outlet: "infos"
  // }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MusicComponent]
})
export class MusicModule { }
