const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const fse = require('fs-extra')
const { dialog } = require("electron");
const Promise = require("bluebird")
const _  =require('lodash')
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
  readdirDeep(result.pop(),event).then(data=>{
    event.sender.send("readdir",data);
  })
});

var send = _.debounce(run, 200, {maxWait:201});
function readdirDeep(_path, event) {
  return fse
    .readdir(_path)
    .then(data => {
      return Promise.map(data, file => {
        const pathFile = path.resolve(_path, file);
        if (fse.lstatSync(pathFile).isDirectory()) {
          return readdirDeep(pathFile, event);
        } else {
          send(event,"readdirProgress",pathFile);
          
          return pathFile;
        }
      },{concurrency:3});
    })
    .then(data => _.flattenDeep(data));
}

function run(event, channel, message) {
  event.sender.send(channel, message);
}