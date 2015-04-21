'use strict';

newsletters.controller('NewsletterCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('newsletters/newsletters.json').success(function(data) {
    $scope.products = data
  });

}])
