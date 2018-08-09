var productController = function($scope, receiptService) {
  $scope.order = function(product) {
    if (product.quantity > 0 && product.count > 0) {
      product.order += product.count;
      product.quantity = product.quantity - product.count;
      receiptService.total += product.price * product.count;
      receiptService.items.set(product.id, product);
      product.count = 0;
    }
  };
};

productController.$inject = ["$scope", "receiptService"];

angular.module("vendor-app")
.component('product', {
  templateUrl: 'product.html',
  bindings: {
    product: '=',
    onUpdate: '&'
  },
  controller: productController
});