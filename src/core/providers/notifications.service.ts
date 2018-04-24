import { Injectable, IterableDiffers } from "@angular/core";
import * as uuid from 'uuid/v4'
import { Observable, Subject } from "rxjs";

/**
 * Describe a notification
 */
interface Notification{
  id: string
  title: string
  msg:string
}
/**
 * Control the sidebar outside the component
 */
@Injectable()
export class NotificationsService {
  /**
   * Component watch this variable to open/close the sidebar
   */
  notifications:Array<Notification> = []
  /**
   * Emit event that contains complete notification on add
   */
  addEvent:Subject<any> = new Subject();
  /**
   * Emit event that contains id on remove 
   */
  removeEvent:Subject<any> = new Subject();

  /**
   * Fetch delay from localStorage 
   */
  constructor() {
    let notificationsDelay = +localStorage.getItem('notificationsDelay')
    if (notificationsDelay < 500) {
      notificationsDelay = 6000
      localStorage.setItem('notificationsDelay', '6000')
    }
  }

  /**
   * Open sidebar
   */
  add(title, msg) {
    const notif = {
      id: uuid(),
      title: title || "",
      msg: msg || ""
    }
    this.addEvent.next(notif)
    this.notifications.push(notif)
    setTimeout(() => {
      this.delete(notif.id)
    }, +localStorage.getItem('notificationsDelay'));
    return notif
  }

  /**
   * delete a notification
   */
  delete(id) {
    this.removeEvent.next(id)
    this.notifications = this.notifications.filter(notif=>notif.id!==id)
  }

  /**
   * Delete all notifications 
   */
  deleteAll(){
    this.notifications.map(notif=>this.delete(notif.id)) 
  }
}