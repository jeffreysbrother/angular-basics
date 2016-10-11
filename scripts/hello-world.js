angular.module('todoListApp')
.directive('helloWorld', function() {
  return {
    template: "This is the hello world directive",
    // restrict use as element only
    restrict: "E"
  };
});
