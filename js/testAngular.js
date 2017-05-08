var app1 = angular.module('app1',[]);


angular.module('app1',[]).controller('controller1',function($scope){
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.updateValue = function(){
		$scope.calculation = $scope.first + ' + ' + $scope.second 
		+ " = " + (+$scope.first+ +$scope.second)
		
	}
	$scope.randomNum2 = Math.random() * 10;
	$scope.randomNum1 = Math.floor($scope.randomNum2);
	
});