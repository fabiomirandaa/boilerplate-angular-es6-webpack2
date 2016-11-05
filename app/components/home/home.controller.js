class HomeController {
    constructor($http, $scope) {
        this._$http = $http;
        this._$scope = $scope;
    }


}

HomeController.$inject = ['$http', '$scope'];

console.log('Entrou de HomeController');
export { HomeController };
