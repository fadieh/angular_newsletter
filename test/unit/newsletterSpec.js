'use strict';

describe('NewsletterCtrl', function() {

  beforeEach(module('newsletters'));

  describe('NewsletterCtrl', function() {

    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('newsletters/newsletters.json').respond([{
        name: 'React.JS London', id: '0', tag1: 'Javasccript', tag2: 'Front-End', tag3: 'London'
      }]);

      scope = $rootScope.$new()
      ctrl = $controller('NewsletterCtrl', {$scope: scope});

    }));

    it('creates the newsletters model data', function() {
      expect(scope.newsletters).toBeUndefined();
      $httpBackend.flush();
      expect(scope.newsletters).toEqual([{ name: 'React.JS London', id: '0', tag1: 'Javasccript', tag2: 'Front-End', tag3: 'London' }])
    });

    it('initially, the total number of signups is empty', function() {
      expect(scope.currentSignUps.length).toBe(0)
    })

    it('a newsletter may be added to the current signups', function() {
      scope.addNewsletter({})
      expect(scope.currentSignUps.length).toBe(1)
    })

  })

});
