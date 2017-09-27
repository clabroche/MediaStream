function Player () {
  const audio = new Audio();
  this.play = function (title) {
    audio.src = title.path;
    audio.play();
  };
}

module.exports = Player;
