// the second argument is an array of dependencies
angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {

  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };
  $scope.helloConsole = dataService.helloConsole;
  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });
  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

})
.service('dataService', function($http) {
  this.helloConsole = function () {
    console.log("this is the hello console service!");
  };

  this.getTodos = function(callback) {
    $http.get('../mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo) {
    console.log("The \'" + todo.name + "\' todo has been deleted!");
    // other logic
  };
  this.saveTodos = function(todo) {
    console.log("The \'" + todo.name + "\' todo has been saved!");
    // other logic
  }
});
