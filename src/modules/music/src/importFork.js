const Promise = require('bluebird');
const pathfs = require('path');
const jsmediatags = require('jsmediatags');
const fs = Promise.promisifyAll(require('fs'));
process.on('message', async path => {
  const result = {
    dir: [],
    files: []
  };
  await fs
    .readdirAsync(path)
    .map(async file => {
      if (await fs.lstatSync(pathfs.join(path, file)).isDirectory()) result.dir.push(pathfs.join(path, file));
      return pathfs.join(path, file);
    })
    .filter(file => file.match(/\.mp3$/))
    .then(async mp3s => {
      var promises = [];
      for (var i = 0; i < mp3s.length; ++i) {
        const mp3 = mp3s[i];
        promises.push(new Promise((resolve, reject) => {
          jsmediatags.read(mp3, {
            onSuccess: function (tag) {
              var tags = tag.tags;
              const tagsToDelete = ['picture', 'APIC', 'IPLS', 'PRIV', 'TCOM', 'TENC', 'TPE3', 'TYER', 'USLT', 'COMM', 'RVA2', 'TALB', 'TCON', 'TDAT', 'TIT2', 'TMED', 'TORY', 'TPE1', 'TPE2', 'TPOS', 'TPUB', 'TRCK', 'TSO2', 'TSOP', 'TSRC', 'TXXX', 'ER', 'UFID'];
              tagsToDelete.map(tagToDelete => delete tags[tagToDelete]);
              tags.path = mp3;
              resolve(tags);
            },
            onError: _ => resolve({path: mp3})
          });
        }));
      }
      return Promise.all(promises);
    })
    .then(mp3s => mp3s.map(mp3 => result.files.push(mp3)))
    .catch(err => process.send({ err }));
  process.send(result);
});
