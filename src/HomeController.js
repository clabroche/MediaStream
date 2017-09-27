function HomeController ($scope, ModuleService, $state) {
  $scope.activeModule = _ => ModuleService.activeModule;
  $state.go('music');
}
module.exports = HomeController;
