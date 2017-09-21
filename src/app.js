const modulesPath = './src/modules/';
const ConfigService = require('./src/ConfigService');
const ModuleService = require('./src/ModuleService');
const HomeController = require('./src/HomeController');
const NavbarController = require('./src/NavbarController');
const Welcome = require(modulesPath + 'welcome/app');
const Music = require(modulesPath + 'music/app');
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
