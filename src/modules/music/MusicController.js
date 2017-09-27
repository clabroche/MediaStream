function MusicController ($scope, $interval, playerService, importService, musicDB) {
  $scope.statusInfos = [];
  $scope.statusWarnings = [];
  $scope.artists = musicDB.getArtists();
  $scope.view = 'artists';
  $scope.navigation = {};
  $scope.play = playerService.play;

  $scope.importMusic = function () {
    const { dialog } = require('electron').remote;
    const path = dialog.showOpenDialog({
      properties: ['openDirectory', 'multiSelections']
    });
    const message = { id: Math.random(), message: 'Import status: 0 musics' };
    $interval(_ => {
      message.message = `Import status: ${importService.nbChanson} musics, file: ${importService.currentFile}`;
    }, 100);
    $scope.statusInfos.push(message);
    console.log(importService)
    importService.import(path).then(_ => {
      $scope.removeStatus(message.id);
      $scope.$apply(_ => {
        $scope.statusInfos.push({
          id: Math.random(),
          message: `Import finish with ${importService.nbChanson} musics found`
        });
        $scope.statusInfos = $scope.statusInfos;
        $scope.artists = musicDB.getArtists();
      });
    }).catch(err => {
      $scope.$apply(_ => {
        $scope.statusWarnings.push({ id: Math.random(), message: err });
        $scope.statusInfos = $scope.statusInfos;
      });
    });
  };
  $scope.removeStatus = function (id) {
    $scope.statusInfos.map((info, index) => {
      if (info.id === id) $scope.statusInfos.splice(index, 1);
    });
    $scope.statusWarnings.map((warning, index) => {
      if (warning.id === id) $scope.statusWarnings.splice(index, 1);
    });
  };
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
