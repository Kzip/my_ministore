var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
$routeProvider

    .when('/orders', {
      templateUrl : './partials/orders.html',
      controller  : 'orderController'
    })
    .when('/customers', {
      templateUrl : './partials/customers.html',
      controller  : 'customerController'
    })
    .when('/all', {
      templateUrl : './partials/home.html',
      controller  : 'allController'
    });



});

//factories
myApp.factory('ordersFactory',function(){
    var orders = [
      {name: 'toilet', age: 34},
      {name: 'boilet', age: 24},
      {name: 'soilet', age: 24}];
    var factory = {};
    factory.getOrders = function (callback){
        // pass the students to a callback to be used by whoever calls the method
        callback(orders);
    };
    factory.addOrder = function(callback){
      orders.push(callback);
    };
    return factory;
});

myApp.factory('customersFactory',function(){
    var customers = [
      {name: 'john', age: 34},
      {name: 'jack', age: 24},
      {name: 'bickback', age: 24}];
    var factory = {};
    factory.getOrders = function (callback){
        // pass the students to a callback to be used by whoever calls the method
        callback(customers);
    };

    return factory;
});


//controllers
myApp.controller('mainController',function($scope){
  $scope.main = "ham in my jam";
});

myApp.controller('orderController', function($scope, ordersFactory){
  $scope.orders = [];
  ordersFactory.getOrders(function (data){
        $scope.orders = data;
    })
    $scope.addStudent = function (){
      // add to the array
      $scope.orders.push($scope.newStudent);
      // clear the form values
      $scope.newStudent = {};
    }

});


myApp.controller('customerController', function($scope, customersFactory){
  $scope.customers = [];
  $scope.errors = [];
  customersFactory.getOrders(function (data){
        $scope.customers = data;
    })
    $scope.addStudent = function (){
      // add to the array
      for(var i = 0; i < $scope.customers.length; i++){
        if($scope.newStudent.name == $scope.customers[i].name){

          return console.log("poop");
        }
      }

      $scope.customers.push($scope.newStudent);
      // clear the form values
      $scope.newStudent = {};
    }
});
myApp.controller('allController', function($scope, customersFactory,ordersFactory){
  $scope.customers = [];
  $scope.orders = [];
  customersFactory.getOrders(function (data){
        $scope.customers = data;
  })
  ordersFactory.getOrders(function (data){
    $scope.orders = data;
  })
});
