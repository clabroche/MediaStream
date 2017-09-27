const cp = require('child_process');
const Promise = require('bluebird');
const pathfs = require('path');
const os = require('os');
const DB = require('./musicDB');
const fs = Promise.promisifyAll(require('fs'));
const db = new DB();
function Import () {
  const self = this;
  this.import = async path => {
    this.nbChanson = 0;
    this.currentFile = '';
    return new Promise((resolve, reject) => {
      if (!path || !path.length) return reject(new Error('No path specified'));
      this.status = 'import is working';
      const dirs = path;
      const forks = [];
      let finish = 0;
      const nbCpus = os.cpus().length;
      const dbObject = {
        artists: {}
      };
      for (var i = 0; i < nbCpus; i++) {
        const fork = cp.fork(pathfs.resolve(__dirname, './importFork.js'));
        fork.on('message', function (data) {
          if (data.hasOwnProperty('err')) console.log(data.err);
          if (data.hasOwnProperty('dir')) dirs.push(...data.dir);
          data.files.map(async file => {
            if (!dbObject.artists.hasOwnProperty(file.artist)) dbObject.artists[file.artist] = { name: file.artist, albums: {} };
            if (!dbObject.artists[file.artist].albums.hasOwnProperty(file.album)) dbObject.artists[file.artist].albums[file.album] = { name: file.album, titles: {} };
            if (!dbObject.artists[file.artist].albums[file.album].titles.hasOwnProperty(file.title)) dbObject.artists[file.artist].albums[file.album].titles[file.title] = file;
            self.nbChanson++;
            self.currentFile = `${file.artist} - ${file.album} - ${file.title}`;
          });
          forks.push(this);
        });
        forks.push(fork);
      }
      const loop = setInterval(_ => {
        if (dirs.length === 0 || forks.length === 0) return;
        const dir = dirs.pop();
        if (!dir) return;
        const fork = forks.pop();
        if (!fork) return;
        fork.send(dir);
      });
      console.time('search');
      const finishInterval = setInterval(async _ => {
        if (finish === 5) {
          clearInterval(loop);
          clearInterval(finishInterval);
          db.merge(dbObject);
          console.timeEnd('search');
          resolve(this.nbChanson);
        }
        if (dirs.length === 0 && forks.length === os.cpus().length) finish++;
        else finish = 0;
      }, 100);
    });
  };
}

module.exports = Import;
