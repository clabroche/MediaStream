const cp = require("child_process");
const Promise = require("bluebird");
const pathfs = require("path");
const jsmediatags = require("jsmediatags");
const fs = Promise.promisifyAll(require("fs"));
process.on("message", async path => {
  const result = {
    dir: [],
    files: []
  };
  const files = await fs
    .readdirAsync(path)
    .catch(err => {
      process.send({ err });
    })
    .map(async file => {
      if (await fs.lstatSync(pathfs.join(path, file)).isDirectory())
        result.dir.push(pathfs.join(path, file));
      return pathfs.join(path, file);
    })
    .filter(function(file) {
      return pathfs.extname(file) === ".mp3";
    })
    .map(async mp3 => {
        console.log(mp3)
      return await new Promise((resolve, reject) => {
        jsmediatags.read(mp3, {
          onSuccess: function(tag) {
            var tags = tag.tags;
            resolve(tags);
          },
          onError: function(error) {
            resolve({})
          }
        });
      });
    })
    .then(mp3s => {
        console.log(mp3s)
      result.files.push(mp3s);
    })
    .catch(err => {
      console.log(err);
    });
  process.send(result);
});
