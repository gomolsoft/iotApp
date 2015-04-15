'use strict';

describe('Controller: ComponentenCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ComponentenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComponentenCtrl = $controller('ComponentenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
