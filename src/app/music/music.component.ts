import { Component, OnInit } from '@angular/core';
import { WalkerService } from "./providers/walker.service";
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  currentfile = ''
  constructor(public walker: WalkerService) { }

  ngOnInit() {
    this.walker.currentFile.subscribe((data:string)=>{
      this.currentfile = data;   
    })
    this.walker.readdir('.').then((data)=>{
    })
  }

}
