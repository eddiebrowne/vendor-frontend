var receiptController = function ($scope, $http, receiptService, vendorService) {
  $scope.total = function () {
    return receiptService.total.toFixed(2);
  };
  
  $scope.location = '';
  $scope.date = {};
  $scope.pickupTime = '';
    
   
  $scope.items = function () {
    var lineItems = [];
    for (let value of receiptService.items.values()) {
      lineItems.push(value);
    }

    return lineItems;
  };

  $scope.show = $scope.items().length > 0;
  
  vendorService.retrieve(function () {
    $scope.markets = vendorService.markets;
    $scope.pickupTime = vendorService.startTime;
    $scope.startTime = vendorService.startTime;
    $scope.endTime = vendorService.endTime;
  });

  $scope.$watch('items', function () {
    $scope.show = $scope.items().length > 0;
    console.log($scope.show);
  });
  
  $scope.$watch('location', function () {
    $scope.days = vendorService.days.filter(function (s) {
      return s.marketId === $scope.location.id;
    });
    $scope.date = {};
    $scope.startTime = '';
    $scope.endTime = '';
    $scope.pickupTime = '';
  });

  $scope.$watch('date', function () {
    var times = vendorService.times.filter(function (s) {
      return s.dateId === $scope.date.id;
    });
    if (times.length > 0) {
      $scope.startTime = times[0].times.startTime;
      $scope.endTime = times[0].times.endTime;
    }
    $scope.pickupTime = '';
  });

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
      
      return order; 
    }();
    
    console.log(data);
    if (data.items.length > 0) {
      $http({
        method: 'POST',
        url: "http://localhost:5000/api/orders",
        data: angular.toJson(data),
        headers: {'Content-Type': 'application/json'}
      })
        .then(
          function success(response) {
            console.log(response);
          },
          function error(response) {
            console.log(response);
          });
    }
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