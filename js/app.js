const ConfigService = require('./js/ConfigService');
const HomeController = require('./js/HomeController');
const NavbarController = require('./js/NavbarController');
const WelcomeController = require('./js/WelcomeController');
const config = require('./js/config');
angular
  .module('app', ['ui.router'])
  .service('ConfigService', ConfigService)
  .controller('HomeCtrl', HomeController)
  .controller('NavbarCtrl', NavbarController)
  .controller('WelcomeController', WelcomeController)
  .config(config);
