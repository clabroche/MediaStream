const EventEmitter = require("events");
const Player = Object.create(EventEmitter.prototype);
Player.init = function() {
  this.id3 = {
    album: "",
    artist: "",
    album: "",
    year: ""
  };
};

module.exports = Player;
