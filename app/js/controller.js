'use strict';

newsletters.controller('NewsletterCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('newsletters/newsletters.json').success(function(data) {
    $scope.newsletters = data
  });

  $scope.currentSignUps = []

  $scope.addNewsletter = function(newsletter) {

    if ($scope.alreadyIn(newsletter)) {
      return false
    } else {
      $scope.currentSignUps.push(newsletter)
      newsletter.signUp = true
    }

  }

  $scope.removeNewsletter = function(index, newsletter) {

    $scope.currentSignUps.splice(index, 1)
    newsletter.signUp = false

  }

  $scope.alreadyIn = function(newsletter) {

    for(var i = 0; i < $scope.currentSignUps.length; i++) {
      if ($scope.currentSignUps[i].name === newsletter.name) {
        return true
      }
    }
    return false
  }

}]);
