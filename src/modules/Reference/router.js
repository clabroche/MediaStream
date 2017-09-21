function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
  const welcome = Object.create(require('../../routes/globalState.js'));
  welcome.name = 'welcome';
  welcome.views['welcome@' + welcome.name] = {
    parent: welcome.name,
    templateUrl: 'src/modules/welcome/welcome.html',
    controller: 'WelcomeController'
  };
  $stateProvider.state(welcome);
}
module.exports = Router;
