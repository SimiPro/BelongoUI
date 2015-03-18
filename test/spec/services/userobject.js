'use strict';

describe('Service: UserObject', function () {

  // load the service's module
  beforeEach(module('belongouiApp'));

  // instantiate service
  var UserObject;
  beforeEach(inject(function (_UserObject_) {
    UserObject = _UserObject_;
  }));

  it('should do something', function () {
    expect(!!UserObject).toBe(true);
  });

});
