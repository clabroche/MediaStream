const Welcome = require("./src/modules/welcome/app");
const Music = require("./src/modules/music/app");
const ConfigService = require('./src/ConfigService');
const ModuleService = require('./src/ModuleService');
const HomeController = require('./src/HomeController');
const NavbarController = require('./src/NavbarController');
const config = require('./src/config');
const ang = angular
  .module('app', ['ui.router'])
  .service('ModuleService', ModuleService)
  .service('ConfigService', ConfigService)
  .controller('HomeCtrl', HomeController)
  .controller('NavbarCtrl', NavbarController)
  .config(config)
.run([
    "$rootScope",
    "$state",
    function($rootScope, $state) {
      $rootScope.$state = $state;
    }
  ]);

Music.init(ang);
Welcome.init(ang);
