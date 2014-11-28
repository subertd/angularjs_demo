(function() {

  var app = angular.module('app', []);
  
  app.controller('DemoCtrl', ['$scope', function($scope) {
  
    $scope.demoModel = {};
    
    $scope.demoSubmit = function() {
      console.debug('Entering demoSubmit');
      var message = this.demoModel.textField;
      alert('You typed: ' + message);
    };
  
  }]);
  
  app.controller('InnerCtrl', ['$scope', function ($scope) {
  
    $scope.innerModel = {};
  
  }]);

})();