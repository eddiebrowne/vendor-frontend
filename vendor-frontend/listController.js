var listController = function($scope, $http) {

  $http.get("products.json")
    .then(
      function successFunction(response) {
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