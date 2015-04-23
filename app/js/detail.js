'use strict';

angular.module('newsletters')
  .controller('DetailCtrl', function ($scope, $http, $routeParams) {

  $http.get('newsletters/newsletters.json').success(function(data) {
      $scope.newsletters = data
      $scope.newsletterPreview = $scope.newsletters[$routeParams.id]
  });

  });
