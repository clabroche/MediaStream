function Router ($stateProvider, $urlRouterProvider, $httpProvider) {
  const {{ModuleName}} = Object.create(require('../../routes/globalState.js'));
  {{ModuleName}}.name = '{{ModuleName}}';
  {{ModuleName}}.views['{{ModuleName}}@' + {{ModuleName}}.name] = {
    parent: {{ModuleName}}.name,
    templateUrl: 'src/modules/{{ModuleName}}/{{ModuleName}}.html',
    controller: '{{Controller}}'
  };
  $stateProvider.state({{ModuleName}});
}
module.exports = Router;
