import { Injectable, ApplicationRef } from "@angular/core";
import { ElectronService } from "ngx-electron";
import { NotificationsService } from "../../../core/providers/notifications.service";
import { DBService } from "../providers/db.service";

import { Subject } from 'rxjs';
import * as fs from 'fs-extra';
import * as jsmediatags from 'jsmediatags';
import * as _ from "lodash";
import * as path from "path";
import * as bluebird from "bluebird";
import * as db from "electron-db";

// Set some defaults
const electron = require("electron");

const { ipcRenderer } = electron;

/**
 * 
 */
@Injectable()
export class WalkerService {
  currentFile = new Subject();
  notif
  constructor(
    private electron: ElectronService,
    private applicationRef: ApplicationRef,
    private notifs: NotificationsService,
    private dbService: DBService
  ) {}

  async readdir() {
    const result = ipcRenderer.sendSync(('open-dir-dialog'))
    return this.readdirDeep(result.pop(), event, ".mp3")
      .then(data => _.flattenDeep(data))
      .then(data => data.filter(data => data !== undefined))
  }
  readdirDeep(_path, event, ext) {
    return fs
      .readdir(_path)
      .then(data => {
        return bluebird.map(data,async file => {
            const pathFile = path.resolve(_path, file);
            if (fs.lstatSync(pathFile).isDirectory()) {
              return await this.readdirDeep(pathFile, event, ext);
            } else if (path.extname(pathFile) === ext) {
              return new Promise((resolve, reject) => {
                jsmediatags.read(pathFile, { onSuccess: function(tag) {
                    var tags = tag.tags;
                    const tagsToDelete = ["picture", "APIC", "IPLS", "PRIV", "TCOM", "TENC", "TPE3", "TYER", "USLT", "COMM", "RVA2", "TALB", "TCON", "TDAT", "TIT2", "TMED", "TORY", "TPE1", "TPE2", "TPOS", "TPUB", "TRCK", "TSO2", "TSOP", "TSRC", "TXXX", "ER", "UFID"];
                    tagsToDelete.map(tagToDelete => delete tags[tagToDelete]);
                    tags.path = pathFile;
                    resolve(tags)
                  }, onError: _ => resolve({ path: pathFile }) });
              }).then((data:any)=>{
                if(!this.notif) this.notif = this.notifs.add("Explore", data.path);
                else this.notifs.updateNotif(this.notif, {msg:data.message})

                this.dbService.musics().import(data)
                return data
              }); 
            }
          },
          { concurrency: 3 }
        )
      })
  }

}