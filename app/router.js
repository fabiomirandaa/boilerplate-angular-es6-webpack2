class Router {
    static configure(app) {
        app.config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'components/home/home.view.html',
                    controller: 'HomeController as ctrl'
                })
                });
        }
    }
export { Router };
