const WelcomeController = require('./WelcomeController');
const config = require('./config');

module.exports.init = function (angular) {
  angular
    .controller('WelcomeController', WelcomeController)
    .config(config);
};
