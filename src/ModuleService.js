
function ModuleService () {
  this.activeModule = 'music';
}
ModuleService.prototype.changeActiveModule = function (name) {
  this.activeModule = name;
};

module.exports = ModuleService;
