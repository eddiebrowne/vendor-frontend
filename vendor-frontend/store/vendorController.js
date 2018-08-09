 var vendorController = function($scope, $localStorage, vendorService) {
   $scope.name = vendorService.vendorName;
   //$scope.locations = vendorService.locations;
 };

 vendorController.$inject = ["$scope", "$localStorage", "vendorService"];

 angular.module("vendor-app", ['ngStorage'])
 .controller("VendorController", vendorController);