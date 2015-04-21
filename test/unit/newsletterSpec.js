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

  })

});
