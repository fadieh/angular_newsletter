'use strict';

newsletters.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $http.get('newsletters/newsletters.json').success(function(data) {
    $scope.newsletters = data
  })

  $scope.newsletterNumber = $routeParams.newsletterid
  $scope.newsletterPreview = $scope.newsletters[$scope.newsletterNumber].body
  $scope.newsletterName = $scope.newsletters[$scope.newsletterNumber].name

}]);
