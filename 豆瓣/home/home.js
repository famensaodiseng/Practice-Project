/**
 * Created by Administrator on 2017/8/10.
 */
(function(angular){
    // 1.首页模块
    var app = angular.module('home', ['ngRoute'])

    // 2.路由规则，自己维护自己
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{// #/home_page
            templateUrl:'home/home.html',
            controller:'homeController'
        })
    }])
    //创建控制器
    app.controller('homeController',['$scope',function ($scope) {
        
    }])
})(angular)