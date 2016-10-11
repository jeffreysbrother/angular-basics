// the second argument is an array of dependencies
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("hello there! this is the helloWorld controller function in teh mainCtrl");
  };
});
