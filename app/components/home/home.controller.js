import './home.view.html'
import './home.style.styl'
import '../../images/coringa.jpg'

export class HomeController {
  constructor ($http, $scope) {
    'ngInject'

    this._$http = $http
    this._$scope = $scope
  }
}
