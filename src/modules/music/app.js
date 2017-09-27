const config = require('./config');
const importService = require('./src/import');
const playerService = require('./src/playerService');
const musicDB = require('./src/musicDB');
module.exports.init = function (angular) {
  angular
    .controller('MusicController', require('./MusicController'))
    .service('importService', importService)
    .service('playerService', playerService)
    .service('musicDB', musicDB)
    .config(config);
};
