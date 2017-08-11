/**
 * Created by Administrator on 2017/8/10.
 */
(function(angular){
    // 1.首页模块
    var app = angular.module('top250', ['ngRoute'])

    // 2.路由规则，自己维护自己
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250',{// #/home_page
            templateUrl:'top250/top250.html',
            controller:'top250Controller'
        })
    }])
    //创建控制器
    app.controller('top250Controller',['$scope',function ($scope) {
        
    }])
})(angular)