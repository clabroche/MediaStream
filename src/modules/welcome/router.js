function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    views: {
      'navbar@welcome': {
        parent: 'welcome',
        templateUrl: 'views/_navbar.html',
        controller: 'NavbarCtrl'
      },
      'modal@welcome': {
        parent: 'welcome',
        templateUrl: 'views/_modal.html',
        controller: 'NavbarCtrl'
      },
      'welcome@welcome': {
        parent: 'welcome',
        templateUrl: 'src/modules/welcome/welcome.html'
      },
      '': {
        abstract: true,
        templateUrl: 'views/home.html',
        controller: 'WelcomeController'
      }
    }
  });
}
module.exports = Router;
