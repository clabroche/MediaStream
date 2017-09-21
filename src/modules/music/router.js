function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider.state({
    name: 'music',
    url: '/',
    views: {
      'navbar@music': {
        parent: 'music',
        templateUrl: 'views/_navbar.html',
        controller: 'NavbarCtrl'
      },
      'modal@music': {
        parent: 'music',
        templateUrl: 'views/_modal.html',
        controller: 'NavbarCtrl'
      },
      'music@music': {
        parent: 'music',
        templateUrl: 'src/modules/music/music.html'
      },
      '': {
        abstract: true,
        templateUrl: 'views/home.html',
        controller: 'MusicController'
      }
    }
  });
}
module.exports = Router;
