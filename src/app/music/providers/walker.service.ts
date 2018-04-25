import { Injectable, ApplicationRef } from "@angular/core";
import { ElectronService } from "ngx-electron";
import { Subject } from 'rxjs';
import * as _ from "lodash";

/**
 * 
 */
@Injectable()
export class WalkerService {
  currentFile = new Subject();
  constructor(
    private electron: ElectronService,
    private applicationRef: ApplicationRef
  ) {}

  readdir() {
    return new Promise((resolve, reject) => {
      this.electron.ipcRenderer.send("readdir");
      this.electron.ipcRenderer.on("readdir", (event, arg) => {
          this.currentFile.next('')
            this.applicationRef.tick();
      });
      this.electron.ipcRenderer.on("readdirProgress", (event, arg) => {
        this.currentFile.next(arg);
        this.applicationRef.tick()
      });
    });
  }
}