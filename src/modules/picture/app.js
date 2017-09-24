const pictureController = require('./pictureController');
const config = require('./config');

module.exports.init = function (angular) {
  angular
    .controller('pictureController', pictureController)
    .config(config);
};
