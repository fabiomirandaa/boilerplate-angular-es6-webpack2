import './directives/exampleDirective/example.view.html'

import { Router } from './router.js'
import { HomeController } from './components/home/home.controller.js'
import ExampleDirective from './directives/exampleDirective/example.directive.js'

let app = angular.module('App', ['ui.router'])

Router.configure(app)

app
  .controller('HomeController', HomeController)
  .directive('exampleDirective', () => new ExampleDirective())
