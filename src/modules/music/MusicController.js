const Promise = require("bluebird");
const player = require("./src/player").init();
const _ = require('lodash')
function MusicController($scope, $interval, importService, musicDB, $q) {
  const artists = {};
  musicDB.find({artist: /\s*\S*/}).then(artists=> {    
    $scope.$applyAsync(() => {
      $scope.artists = _.groupBy(artists, "artist")
    });
  });
  $scope.searchAlbums = function(artist) {
    musicDB.find({artist}).then(albums=>{
      albums = _.groupBy(albums, "album");
      console.log(albums)
    });
  };
  $scope.importMusic = importService.import;
  $scope.module = "I'm a music Module!";
}
module.exports = MusicController;
