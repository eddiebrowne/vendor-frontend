var vendorService = function($http, $localStorage) {
  var service = {};

  service.vendorName = '';
  service.locations = [];
  var id = $localStorage.vendorID;
  service.id = typeof id === 'undefined' ? 0 : id;
  
  $http.get("http://localhost:5000/api/accounts?vendorid=" + service.id)
    .then(
      function successFunction(response) {
        console.log(response.data);
        service.locations = response.data.locations;
        service.vendorName = response.data.vendorName;
      },
      function errorFunction(error) {
        console.log(error);
      });
  
  
  return service;
};

angular.module("vendor-app", ['ngStorage']).factory('vendorService', ['$http', '$localStorage', vendorService]);