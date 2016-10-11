// the second argument is an array of dependencies
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("this is the helloWorld controller function in the mainCtrl");
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function() {
    console.log("this is the coolCtrl function!");
  };

  // inheritance from the parent only takes place when there is not a value or method
  // of the same name on the child.
  // Prototypical inheritance flows only in one direction: from parent to children
  // also: sibling controllers do not have access to each other's scopes
  $scope.helloWorld = function() {
    console.log("this is not the main ctrl!");
  };
});
