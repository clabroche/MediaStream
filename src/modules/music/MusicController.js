function MusicController ($scope, $interval, playerService, importService, musicDB) {
  $scope.importMusic = function () {
    const { dialog } = require('electron').remote;
    const path = dialog.showOpenDialog({
      properties: ['openDirectory', 'multiSelections']
    });
    importService.import(path).then(_ => {
      $scope.$apply(_ => {
        $scope.artists = musicDB.getArtists();
      });
    });
  };
  $scope.artists = musicDB.getArtists();
  $scope.view = 'artists';
  $scope.navigation = {};
  $scope.play = playerService.play;
  $scope.changeView = function (type, args) {
    if (type === 'albums') {
      $scope.navigation.artist = args.artist;
      $scope.albums = musicDB.albums(args.artist);
      $scope.view = 'albums';
    }
    if (type === 'titles') {
      $scope.navigation.album = args.album;
      $scope.titles = musicDB.titles($scope.navigation);
      $scope.view = 'titles';
    }
  };
}
module.exports = MusicController;
