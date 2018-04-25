import { Component, OnInit } from '@angular/core';
import { WalkerService } from "./providers/walker.service";
import { NotificationsService, Notification} from '../../core/providers/notifications.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  currentFileNotif:Notification
  constructor(public walker: WalkerService, private notifsService: NotificationsService) { }

  ngOnInit() {
    
  }

  walk(){
    const sub = this.walker.currentFile.subscribe((data: string) => {
      if (!this.currentFileNotif) this.currentFileNotif = this.notifsService.add('Explore', 'data')
      else this.notifsService.updateNotif(this.currentFileNotif.id, {
        msg: data
      })
    })
    this.walker.readdir().then((data) => {
      sub.unsubscribe()
    })
  }

}
