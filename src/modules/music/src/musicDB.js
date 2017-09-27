const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
var path = require("path");
var appDir = path.dirname(require.main.filename);
const _ = require('lodash');
if (!fs.existsSync(path.resolve(appDir, 'db/music.db'))) { fs.writeFileSync(path.resolve(appDir, 'db/music.db'), '{}', 'utf8'); }
let dbFile = JSON.parse(fs.readFileSync(path.resolve(appDir, 'db/music.db'), 'utf8'));

function MusicDB () {
  this.merge = function (data) {
    dbFile = _.merge(dbFile, data);
    fs.writeFileSync(path.resolve(appDir, 'db/music.db'), JSON.stringify(dbFile));
  };
  this.getArtists = () => _.values(dbFile.artists);
  this.albums = artist => _.values(dbFile.artists[artist].albums);
  this.titles = args => _.values(dbFile.artists[args.artist].albums[args.album].titles);
}

module.exports = MusicDB;
