const cp = require("child_process");
const Promise = require("bluebird");
const pathfs = require("path");
const os = require("os");
const fs = Promise.promisifyAll(require("fs"));
function Import() {
  this.import = async path => {
    if (!fs.existsAsync(path)) return;
    this.import = true;
    this.status = "import is working";
    const dirs = [path];
    const files = [];
    const forks = [];
    let finish = 0;
    const nbCpus = os.cpus().length;
    for (var i = 0; i < nbCpus; i++) {
      const fork = cp.fork(pathfs.resolve(__dirname, "./importFork.js"));
      fork.on("message", function(data) {
        if (data.hasOwnProperty("err")) console.log(data.err);
        if (data.hasOwnProperty("dir")) dirs.push(...data.dir);
        if (data.hasOwnProperty("files")) files.push(...data.files);
        forks.push(this);
      });
      forks.push(fork);
    }
    const loop = setInterval(_ => {
      const dir = dirs.pop();
      if (!dir) return;
      const fork = forks.pop();
      if (!fork) return;
      fork.send(dir);
    });
    console.time("search");
    const finishInterval = setInterval(async _ => {
      if (finish === 10) {
        clearInterval(loop);
        clearInterval(finishInterval);
        console.log(files);
        files.map(array=>{
          array.map(async file=>{
            await db.insert(file)
          })
        })
        console.timeEnd("search");
      }
      if (dirs.length === 0) finish++;
      else finish = false;
    }, 100);
  };
}

module.exports = Import;
