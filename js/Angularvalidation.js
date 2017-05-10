var Anvali = angular.module("Anvali",[]);

Anvali.controller("formController",function($scope){
	
	$scope.skills = [
	{topic: "C++", learned: false},
	{topic: "C#", learned: false},
	{topic: "C", learned: false},
	{topic: "Python", learned: false},
	{topic: "Java", learned: true},
	{topic: "Javascript", learned: true},
	{topic: "HTML5", learned: true},
	{topic: "CSS3", learned: true},
	{topic: "Jquery", learned: true},
	{topic: "Git", learned: true},
	{topic: "Mysql", learned: true},
	];
	$scope.newTopic = "";
	$scope.missingNewTopicError = "";
	$scope.addTopic = function(newTopic){
		if(!(newTopic===undefined || newTopic==="")){
			
			$scope.skills.push({topic: newTopic, learned: true});
			$scope.missingNewTopicError = "";
		}else{
			$scope.missingNewTopicError = "Please enter a topic";
		}
	}
});

Anvali.controller("userController", function($scope){
	
	$scope.users = [
	{fName:"fName", lName:"lName", subscribe:"subscribe", dMethod:"delivery method"}
	];
	
	$scope.saveUser = function(userInfo){
		if($scope.userForm.$valid){
			$scope.users.push({fName:userInfo.fName, lName: userInfo.lName, subscribe:userInfo.subscribe,dMethod:userInfo.dMethod});
			console.log("saved");
		}else{
			console.log("Error");
		}
		
	}
	
});