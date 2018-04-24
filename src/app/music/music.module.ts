import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router'

import { WalkerService } from "./providers/walker.service";
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
  declarations: [MusicComponent],
  providers:[
    WalkerService
  ]
})
export class MusicModule { }
