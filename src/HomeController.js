function HomeController ($scope, ModuleService) {
  $scope.activeModule = _ => ModuleService.activeModule;
}
module.exports = HomeController;
