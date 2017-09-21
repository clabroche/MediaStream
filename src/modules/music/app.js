const config = require('./config');

module.exports.init = function (angular) {
  angular
    .controller('MusicController', require('./MusicController'))
    .config(config);
};
