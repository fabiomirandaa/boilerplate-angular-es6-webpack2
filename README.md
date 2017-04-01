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
import './home.view.html'; //Import view template in the controller making a complete component

class HomeController { // Name that controller
    constructor($http, $scope) {
        this._$http = $http;
        this._$scope = $scope;
    }


}

HomeController.$inject = ['$http', '$scope']; //Injection dependencies in Class

export { HomeController }; // Export Controller to use in app.js and router.js
```
#### Service
```
class UserService { // Name that service
    constructor($http) {
        this._$http = $http;
    }

    getUser(id) {
       return this._$http.get(`/users?id=${id}` );
   }

}

UserService.$inject = ['$http']; //Injection dependencies in Class

export { UserService }; // Export Service to use in app.js and router.js

```


### Directives

Directives are a little more complicated because the Angular needs an literal object, different from the controller and service that create constructor function

```
class NameDirective {
  constructor() {//Define directive's properties
    this.template = '<div>{{ctrl.name}}</div>';// You can use templateURL too
    this.restrict = 'AE';
    this.scope = {};
    this.controller = ExampleDirectiveController;
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }

  //compile function
  compile() {

  }

  //link function
  link() {

  }
}

export { NameDirective };

// Directive's controller, but you can write controller in a separated file  
class NameDirectiveController {
  constructor () {
    this.name = 'Annye';
  }
}
```
