var receiptController = function ($scope, $http, receiptService, vendorService) {
  $scope.total = function () {
    return receiptService.total.toFixed(2);
  };
  
  $scope.items = function () {
    var lineItems = [];
    for (let value of receiptService.items.values()) {
      lineItems.push(value);
    }

    return lineItems;
  };
  
  $scope.customer = "";
  $scope.locations = vendorService.locations;

  $scope.processOrder = function () {
    var data = function ()
    {
      var list = [];
      var items = $scope.items();
      console.log(items);
      for (var i = 0; i < items.length; i++)
      {
        var item = items[i];
        console.log(item);
        if (item.order > 0) {
          var lineItem = {};
          lineItem.id = item.id;
          lineItem.amount = item.order;
          list.push(lineItem);
        }
      }
      
      var order = {};
      order.customer = $scope.customer;
      order.vendorID = vendorService.id;      
      order.items = list;
      
      return angular.toJson(order); 
    }();
    
    console.log(data);
    $http({
      method: 'POST',
      url: "http://localhost:5000/api/orders",
      data: data,
      headers: {'Content-Type': 'application/json'}
    })
      .then(
        function success(response) {
          console.log(response);
        },
        function error(response) {
          console.log(response);
        });
  };
};
receiptController.$inject = ["$scope", "$http", "receiptService", "vendorService"];

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