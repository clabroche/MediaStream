const cp = require('child_process');
const Promise = require('bluebird');
const pathfs = require('path');
const os = require('os');
const DB = require('./musicDB');
const db = new DB();
function Import () {
  this.import = async path => {
    return new Promise((resolve, reject) => {
      this.import = true;
      this.status = 'import is working';
      const dirs = path;
      const forks = [];
      let finish = 0;
      const nbCpus = os.cpus().length;
      let nbChanson = 0;
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
            nbChanson++;
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
          resolve(nbChanson);
        }
        if (dirs.length === 0 && forks.length === os.cpus().length) finish++;
        else finish = 0;
      }, 100);
    });
  };
}

module.exports = Import;
