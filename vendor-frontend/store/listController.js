var listController = function ($scope, $http) {
  //$http.get("products.json")
  $http.get("http://localhost:5000/api/products?vendor=somevendor")
    .then(
      function successFunction(response) {
        console.log(response.data);
        $scope.list = response.data;        
      },
      function errorFunction(error) {
        console.log(error);
      });
};

listController.$inject = ["$scope", "$http"];

angular.module("vendor-app")
  .component('list', {
    templateUrl: 'list.html',
    controller: listController
  });