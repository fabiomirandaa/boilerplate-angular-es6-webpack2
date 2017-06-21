export class Router {
  static configure (app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      'ngInject'

      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('main', {
          url: '',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        })
    })
  }
}
