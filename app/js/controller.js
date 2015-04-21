'use strict';

newsletters.controller('NewsletterCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('newsletters/newsletters.json').success(function(data) {
    $scope.newsletters = data
  });

  $scope.currentSignUps = []

  $scope.addNewsletter = function(newsletter) {
    $scope.currentSignUps.push(newsletter)
  }

  $scope.removeNewsletter = function(index ,newsletter) {
    $scope.currentSignUps.splice(index, 1)
  }

}]);
