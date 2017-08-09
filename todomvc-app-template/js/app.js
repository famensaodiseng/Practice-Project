(function (angular) {
	'use strict';  //严格模式
	// Your starting point. Enjoy the ride!
	//1.创建模块
	var app= angular.module('todosApp',[])
	app.controller('todosController',[
		'$scope','$location',function ($scope,$location) {
			console.log($location.url());
			//hashchange
			//$scpoe.$watch
			//功能一，任务的展示，
		$scope.todos=[
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:false},
			{id:3,name:'上班',completed:true},
			{id:4,name:'学习',completed:false},
			{id:5,name:'游戏',completed:true},
		]

		//功能2.添加任务
		$scope.newTodo=''
		$scope.add=function () {
			//判断newtodo是否为空
			if(!$scope.newTodo){
				return
			}
			//把新任务添加到$scope.tidis中
			$scope.todos.push({
				if:Math.random(),
				name:$scope.newTodo,
				completed:false
			})
			//置空
			$scope.newTodo=""
		}
		//功能三:删除任务。
		$scope.remove= function(id) {
			for(var i=0;i<$scope.todos.length;i++){
				var item=$scope.todos[i]
				if(item.id===id){
					$scope.todos.splice(i,1)
					return
				}
			}
		}
		//功能四。修改任务内容
		$scope.isEditingId=-1
		$scope.edit=function (id) {
			$scope.isEditingId=id;
		}
		$scope.save=function () {
			$scope.isEditingId=-1;
		}


		//功能五，修改状态。

		//功能6，批量切换任务状态
		$scope.selectAll = false;
		$scope.toggleAll=function(){
			//让$scope.todos中所有数据的completed值都等于$scope.selectAll
			for (var i=0;i<$scope.todos.length;i++){
				var item =$scope.todos[i]
				item.completed=$scope.selectAll
			}
		}

		//显示未完成数

		$scope.getActive = function () {
			//遍历$scope.todos.找到所有completed属性值为true
			var count =0
			for(var i=0;i<$scope.todos.length;i++){
				var item=$scope.todos[i]
				if(!item.completed){
					count++
				}
			}
			return count
		}

		//功能八-清楚所有已完成任务
		$scope.clearAll = function () {
			//遍历数组$scope.todos数组，如果当前元素的complected为true就把他删除】
			for(var i = $scope.todos.length-1;i>=0;i--){
				//这里要改为I--，从后往前判断。
				var item=$scope.todos[i]
				if(item.completed){
					$scope.todos.splice(i,1)
				}
			}
		}

		//功能9，切换不同状态的显示
		$scope.isCompleted ={}
		//未完成任务
		$scope.active=function () {
			$scope.isCompleted={completed:false}
		}
		$scope.completed =function () {
			$scope.isCompleted={completed:true}
		}
		//显示所有任务
		$scope.all = function() {
			$scope.isCompleted={}
		}

		//
	}])
})(angular);
