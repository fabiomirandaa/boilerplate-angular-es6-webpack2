class HomeController {
    constructor($http, $location, $scope) {
        this._$http = $http;
        this._$scope = $scope;
    }


}

HomeController.$inject = ['$http', '$location', '$scope'];

console.log('Entrou de HomeController');
export { HomeController };
