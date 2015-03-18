'use strict';

describe('Controller: MypictCtrl', function () {

  // load the controller's module
  beforeEach(module('belongouiApp'));

  var MypictCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MypictCtrl = $controller('MypictCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
