export default class ExampleDirective {
  constructor () {
    this.templateUrl = 'directives/exampleDirective/example.view.html'
    this.restrict = 'E'
    this.scope = {}
    this.controller = ExampleDirectiveController
    this.controllerAs = 'ctrl'
    this.bindToController = true
  }
  compile () {}
  link (scope, elm, attrs, ngModelController) {}
}

class ExampleDirectiveController {
  constructor ($scope) {
    this._$scope = $scope
    this.setTitle()
  }
  setTitle () {
    this._$scope.title = 'Example Directive'
  }
}

ExampleDirectiveController.$inject = ['$scope']
