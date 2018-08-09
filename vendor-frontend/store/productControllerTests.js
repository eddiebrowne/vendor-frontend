describe('Product Controller Tests', function() {
  describe('productController', function() {
    var $scope;
    var service;

    beforeEach(function() {
      module('vendor-app');
      inject(function($injector) {
        service = $injector.get('receiptService');
      });
    });


    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('productController', {
        $scope: $scope,
        $receiptService: service
      });
    }));

    it('should return empty order information', function() {
      var items = service.items;
      var total = service.total;
      expect(items).toBeDefined();
      expect(total).toBe(0);
    });

    it('should add product to order', function() {
      var product = {
        id: 0,
        quantity: 1,
        count:1,
        order: 0,
        price: 1.00
      };
      $scope.order(product);
      //expect(service.items).toContain(product);
      
      //expect(service.items.get(product.id).quantity).toBe(0);
      expect(service.total).toBe(1);
    });
    
    it('should not add out-of-stock product to order', function() {
      var product = {
        id: 0,
        quantity: 0,
        count:1,
        order: 0,
        price: 1.00
      };
      $scope.order(product);
      expect(service.items).toEqual(new Map());
      expect(service.total).toEqual(0);
    });
  });
});