// the second argument is an array of dependencies
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };

  $scope.todos = [
    {"name": "clean house"},
    {"name": "think about John Stamos"},
    {"name": "update beliefs"},
    {"name": "begin to sense scents of handfulls of items, carefully"},
    {"name": "be nice to wife"},
    {"name": "clean up blood in the library"}
  ]

});
