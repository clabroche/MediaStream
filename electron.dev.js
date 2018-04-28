const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const fse = require('fs-extra')
const { dialog } = require("electron");
const Promise = require("bluebird")
const _  =require('lodash')
const jsmediatags = require('jsmediatags')

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(
    url.format({
      pathname: "localhost:4200",
      protocol: "http",
      slashes: true
    })
  );
  // win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on("readdir", (event, arg) => {
  const result = dialog.showOpenDialog({ properties: ["openDirectory"] });
  readdirDeep(result.pop(), event, arg.ext)
  .then(data => _.flattenDeep(data))
  .then(data => data.filter(data => data !== undefined))
    .then(data => {
      event.sender.send("readdir", data);
    });
});

var send = _.debounce(run, 200, {maxWait:201});
function readdirDeep(_path, event, ext) {
  return fse
    .readdir(_path)
    .then(data => {
      return Promise.map(
        data,
        async file => {
          const pathFile = path.resolve(_path, file);
          if (fse.lstatSync(pathFile).isDirectory()) {
            return await readdirDeep(pathFile, event, ext);
          } else if (path.extname(pathFile) === ext) {
            send(event, "readdirProgress", pathFile);
            return new Promise((resolve, reject) => {
              jsmediatags.read(pathFile, { onSuccess: function(tag) {
                  var tags = tag.tags;
                  const tagsToDelete = ["picture", "APIC", "IPLS", "PRIV", "TCOM", "TENC", "TPE3", "TYER", "USLT", "COMM", "RVA2", "TALB", "TCON", "TDAT", "TIT2", "TMED", "TORY", "TPE1", "TPE2", "TPOS", "TPUB", "TRCK", "TSO2", "TSOP", "TSRC", "TXXX", "ER", "UFID"];
                  tagsToDelete.map(tagToDelete => delete tags[tagToDelete]);
                  tags.path = pathFile;
                  resolve(tags)
                }, onError: _ => resolve({ path: pathFile }) });
            });
            return 
          }
        },
        { concurrency: 3 }
      )
    })
}

function run(event, channel, message) {
  event.sender.send(channel, message);
}