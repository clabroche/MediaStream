const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const fse = require('fs-extra')
const Promise = require("bluebird")
const _  =require('lodash')
const jsmediatags = require('jsmediatags')
const dialog = require('electron').dialog
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

ipcMain.on("open-dir-dialog", (event, arg) => {
  event.returnValue = dialog.showOpenDialog({
    properties: ["openDirectory"]
  });;

});