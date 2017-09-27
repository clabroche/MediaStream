function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider.state({
    name: 'picture',
    url: '/',
    views: {
      'navbar@picture': {
        parent: 'picture',
        templateUrl: 'views/_navbar.html',
        controller: 'NavbarCtrl'
      },
      'modal@picture': {
        parent: 'picture',
        templateUrl: 'views/_modal.html',
        controller: 'NavbarCtrl'
      },
      'picture@picture': {
        parent: 'picture',
        templateUrl: 'src/modules/picture/picture.html'
      },
      '': {
        abstract: true,
        templateUrl: 'views/home.html',
        controller: 'pictureController'
      }
    }
  });
}
module.exports = Router;
