import './styles/main.styl';
import './components/home/home.view.html';


import { Router } from './router.js';
import { HomeController } from './components/home/home.controller.js';

var app = angular.module('App', ['ui.router']);

Router.configure(app);

app.controller('HomeController', HomeController);
