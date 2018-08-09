var receiptController = function($scope, receiptService) {
  $scope.total = function() {
    return receiptService.total.toFixed(2);
  };
  $scope.items = function() {
    var lineItems = [];
    for (let value of receiptService.items.values()) {
      lineItems.push(value);
    }

    return lineItems;
  };
};
receiptController.$inject = ["$scope", "receiptService"];

angular.module("vendor-app")
  .component('total', {
    templateUrl: 'total.html',
    controller: receiptController
  })
  .component('item', {
    templateUrl: 'item.html',
    controller: receiptController,
    bindings: {
      item: '='
    }
  });