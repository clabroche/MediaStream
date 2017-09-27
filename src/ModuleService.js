
function ModuleService () {
  this.activeModule = 'welcome';
}
ModuleService.prototype.changeActiveModule = function (name) {
  this.activeModule = name;
};

module.exports = ModuleService;
