(function() {
  var app = angular.module("vendor-app", ['ngStorage', 'moment-picker'])
    .config(['momentPickerProvider', function (momentPickerProvider) {
      momentPickerProvider.options({
        // locale:        'en',
        // // format:        'L LTS',
        // // minView:       'hour',
        // // maxView:       'minute',
        // //startView:     'hour',
        // autoclose:     true,
        // minutesStep:   30,
        
        
      });
    }]);
})();