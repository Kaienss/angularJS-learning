var myApp = angular.module('myApp',[]);

myApp.controller('myController', function($scope){
	$scope.randomNum1 = Math.random() * 10;
	$scope.randomNum2 = Math.random() * 10;
	
	$scope.first = 1;
	
});