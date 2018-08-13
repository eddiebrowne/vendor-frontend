 var vendorController = function($scope, vendorService) {
    vendorService.retrieve(function (){
      $scope.name = vendorService.vendorName;
      //console.log($scope.name);
    });
 };

vendorController.$inject = ["$scope", "vendorService"];

 angular
   .module("vendor-app")
   .controller("VendorController", vendorController);