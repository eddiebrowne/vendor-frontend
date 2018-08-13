var vendorService = function ($http, $localStorage) {

  var service = {};
  service.vendorName = '';
  service.markets = [];
  service.days = [];
  service.times = [];
  service.startTime = "";
  service.endTime = "";
  
  var id = $localStorage.vendorID;
  service.id = typeof id === 'undefined' ? 1 : id;

  service.retrieve = function (callback) {
    $http.get("http://localhost:5000/api/accounts?vendorid=" + service.id)
      .then(
        function successFunction(response) {
          //console.log(response.data);
          service.markets = [{ id: 1, name: 'FM 1'} ,{id: 2, name:'FM 2'}];//response.data.markets;
          service.days =
            [
              {id: 1, marketId: 1, day: 'Sunday' },
              {id: 2, marketId: 1, day: 'Wednesday' },
              {id: 3, marketId: 2, day: 'Saturday' }
            ];
          service.times = 
            [
              {id: 1, dateId: 1, times: {startTime: "9:00", endTime: "14:30"} },
              {id: 2, dateId: 2, times: {startTime: "16:00", endTime: "20:00"} },
              {id: 3, dateId: 3, times: {startTime: "10:00", endTime: "15:00"} }
            ];
          service.vendorName = response.data.name;
          // service.startTime = "9:00";
          // service.endTime = "14:30";
          callback();
        },
        function errorFunction(error) {
          console.log(error);
        });
  };

  service.notify = function () {
    $rootScope.$emit('notify');
  };

  return service;
};

angular
  .module("vendor-app")
  .factory('vendorService', ['$http', '$localStorage', vendorService]);