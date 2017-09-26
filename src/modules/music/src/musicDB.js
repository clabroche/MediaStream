const Promise = require("bluebird");
var Datastore = require("nedb"),
  db = new Datastore({ filename: "./db/music.db" });
db = Promise.promisifyAll(db);
db.loadDatabase();
function MusicDB() {
  this.find = function(search) {
    return new Promise((resolve, reject) =>{
      db.findAsync(search).then(data => resolve(data))
    });
  };
}
module.exports = MusicDB;
