const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');
if (!fs.existsSync('./db/music.db')) { fs.writeFileSync('./db/music.db', '{}', 'utf8'); }
let dbFile = JSON.parse(fs.readFileSync('./db/music.db', 'utf8'));

function MusicDB () {
  this.merge = function (data) {
    dbFile = _.merge(dbFile, data);
    fs.writeFileSync('./db/music.db', JSON.stringify(dbFile));
  };
  this.getArtists = () => _.values(dbFile.artists);
  this.albums = artist => _.values(dbFile.artists[artist].albums);
  this.titles = args => _.values(dbFile.artists[args.artist].albums[args.album].titles);
}

module.exports = MusicDB;
