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
	
});