describe('Vendor Controller Tests', function() {
  describe('vendorController', function() {
    var $scope;

    beforeEach(module('vendor-app'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('vendorController', {
        $scope: $scope
      });
    }));

    it('should return vendor name', function() {
      expect($scope.name).toBe('Flower Shop');
    });
  });
});