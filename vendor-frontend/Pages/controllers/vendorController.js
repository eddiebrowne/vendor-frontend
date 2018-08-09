 var vendorController = function($scope) {
   $scope.name = "Flower Shop";
 };

 angular.module("vendor-app")
 .controller("VendorController", vendorController);