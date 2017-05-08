var testApp = angular.module("testApp1",[]);

testApp.controller("testController", function($scope){
	$scope.num1 = 1;
	$scope.num2 = 2;
	$scope.calculate = function(){
		$scope.result = $scope.num1 + " + " + $scope.num2 + " = " + (+$scope.num1 + +$scope.num2);
	}
	$scope.update = function(){
		$scope.newNum = $scope.num2;
	}
	$scope.eoBishop = [
	{person: "Tiande", stat: "out"},
	{person: "Chujie", stat: "in"},
	{person: "Junwen", stat: "out"},
	{person: "Qidong", stat: "in"}
	];
	
	$scope.testShow = function(){
		
		return $scope.checkBox ? "sub1.html" : "sub2.html";
	};
	
	$scope.keydown = function(e){
		$scope.kdKey = String.fromCharCode(e.keycode);
	}
	$scope.input1 = false;
	$scope.testnum = 0;
	
	$scope.switchStat = function(){
		$scope.testnum++;
	}
	
});