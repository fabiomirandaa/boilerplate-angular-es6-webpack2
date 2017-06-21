# boilerplate-angular-es6-webpack2

To install dependencies run:
`npm i`

To run the project use:

`npm start`

### To install test dependencies:

Use npm to install Protractor globally with:
`npm install -g protractor`
Update webdriver-manage(is a helper tool to easily get an instance of a Selenium Server):
`webdriver-manager update`
Now start up a server with:
`webdriver-manager start`

### To run test:
`cd e2e-tests && protractor protractor.conf.js`

## Pattern used in boilerplate

### Controllers & Services

Controllers and Services are write in ES6, example:
#### Controller
```
import './home.view.html'; // Import view template in the controller making a complete component

export class HomeController { // Export Controller to use in app.js and router.js
    constructor($http, $scope) {
        'ngInject' // Dependencies injection

        this._$http = $http
        this._$scope = $scope
    }

}
```
#### Service
```
export class UserService { // Export Service to use in app.js or Controllers
    constructor($http) {
        'ngInject' // Dependencies injection

        this._$http = $http
    }

    getUser(id) {
       return this._$http.get(`/users?id=${id}` )
   }

}
```


### Directives

Directives are a little more complicated because the Angular needs an literal object, different from the controller and service that create constructor function

```
export class ExampleDirective { // Export Directive to use in app.js
  constructor () {
    'ngInject' // Dependencies injection

    this.templateUrl = 'directives/exampleDirective/example.view.html'
    this.restrict = 'E'
    this.controllerAs = 'ctrl'
    this.scope = {
      title: '@'
    }

    this.setTitle()
  }

  // optional compile function
  compile (tElement) {
    tElement.css('position', 'relative')
  }

  // optional link function
  link (scope, element) {
    this.$interval(() => this.move(element), 1000)
  }

  // example method
  setTitle (title) {
    this.title = title
  }

  // example method
  move (element) {
    element.css('left', (Math.random() * 500) + 'px')
    element.css('top', (Math.random() * 500) + 'px')
  }

}
```
