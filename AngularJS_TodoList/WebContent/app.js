/**
 * This file contains the code for the ToDo Angular App and Controller.
 * 
 * @since v1.0
 * @auther Hasan Sunasara
 */

var app = angular.module("TodoListApp",[]);

app.controller("TodoListController", function($scope){
	
	$scope.todoList = [];
	
	
	//Function to hide messages 
	$scope.hideMessages = function() {
		$scope.showSuccess=false;
		$scope.showError=false;
	}
	
	//Hide the messages by default
	$scope.hideMessages();
	
	
	//Function to add new ToDo item
	$scope.addTodo = function() {

		//Validate for the blank entry
		if(!$scope.newTodo)
		{
			return;	
		}

		//Hide any of previous message
		$scope.hideMessages();

		
		//Validate for the duplicate todo item
		if($scope.exists($scope.newTodo))
		{
			$scope.errorText='The entered ToDo item is already added.';
			$scope.showError=true;	
			return;
			
		}
		else
		{
			$scope.successText='New ToDo item has been added successfully.';
			$scope.showSuccess="true";
			$scope.todoList.push({"todo":$scope.newTodo,"description":$scope.newDescription});
			
		}
		
	}
	
	//Function to remove the todo item
	$scope.remove = function(index) {
		if(confirm("Are you sure you want to remove this ToDo item?"))
		{
			$scope.todoList.splice(index,1);
			$scope.reset();
			$scope.successText='Selected ToDo item has been removed successfully.';
			$scope.showSuccess="true";

		}
		
	}
	
	//Function to reset the form
	$scope.reset = function() {
		$scope.showSuccess=false;
		$scope.showError=false;
		$scope.newTodo='';
		$scope.newDescription='';
		
	}
	
	//Function to check duplicate todo item
	$scope.exists = function(newTodo) {
		for(var i = 0; i < $scope.todoList.length; i++) 
		{
			if($scope.todoList[i].todo === newTodo)
			{
				return true;	
			}
		}
		return false;
	}
	
	
});

