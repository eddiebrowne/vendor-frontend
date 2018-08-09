describe('List Controller Tests', function() {
  describe('listController', function() {
    var $scope;

    beforeEach(module('vendor-app'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('listController', {$scope: $scope});
    }));
    
    it('should GET product list', function(){
      expect($scope.list.length).toBeGreaterThanOrEqual(3);
    });
    
  })
});