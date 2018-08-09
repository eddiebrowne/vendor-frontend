var receiptService = function() {
    var service = {};
    service.items = new Map();
    service.total = 0;
    return service;
  };

angular.module("vendor-app")
.factory('receiptService', receiptService);