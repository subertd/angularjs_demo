(function() {

  var app = angular.module('app', []);
  
  app.controller('DemoCtrl', function() {
  
    this.demoModel = {};
    
    this.demoSubmit = function() {
      console.debug('Entering demoSubmit');
      var message = this.demoModel.textField;
      alert('You typed: ' + message);
    };
  
  });

})();