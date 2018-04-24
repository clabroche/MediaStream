import { Component, Renderer2, ViewChildren, ElementRef, QueryList } from "@angular/core";
import { NotificationsService } from "../providers/notifications.service";
import * as bluebird from 'bluebird'
import { CommonService } from "../../core/providers/common.service";
import { Observable } from "rxjs";

/**
 * Display an mini-popup 
 */
@Component({
  selector: "notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent {

  @ViewChildren('notifModel') htmlNotifications:Iterable<ElementRef>

  _notifications = []

  /**
   * load dependencies instances
   * @param ns to track notifications outside component
   * @param renderer2
   * @param common
   */
  constructor(public ns: NotificationsService, private renderer2: Renderer2, private common: CommonService) {
    this.ns.addEvent.subscribe(data => this._notifications.push(data))
    this.ns.removeEvent.subscribe((id:any) => this.deleteNotif(id))
  }

  /**
   * launch css animations and delete notification from id 
   * @param id 
   * @param html 
   */
  deleteNotif(id){
    return new Promise(async (resolve, reject) => {
      const htmlNotif = await this.getHtmlNotif(id)
      if(!htmlNotif) return
      this.renderer2.addClass(htmlNotif,"deleteNotif")
      setTimeout(() => {
        this._notifications = this._notifications.filter(notif => notif.id !== id)
        resolve()
      }, 500);
    });
  }

  /**
   * delete All notifications
   */
  deleteAll(){

    return bluebird.each(this.htmlNotifications, htmlNotif=>{
      this.deleteNotif(htmlNotif.nativeElement.id)
      return this.common.wait(50)
    })
  }

  /**
   * Get HTML ref of the concern id
   */
  async getHtmlNotif(id) {
    let htmlNotif = await bluebird.filter(this.htmlNotifications, htmlNotif => htmlNotif.nativeElement.id === id)
    if (htmlNotif.length) return htmlNotif.pop().nativeElement
  }
}
 