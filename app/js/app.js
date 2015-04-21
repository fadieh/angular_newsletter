'use strict';

var newsletters = angular.module('newsletters', ['ngResource', 'ngRoute', 'newsletters']);

newsletters.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/', {
    templateUrl: 'partials/main.html',
    controller: 'NewsletterCtrl'
  })

}])
