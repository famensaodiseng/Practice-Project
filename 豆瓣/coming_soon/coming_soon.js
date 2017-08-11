/**
 * Created by Administrator on 2017/8/10.
 */
(function(angular){
    // 1.首页模块
    var app = angular.module('coming_soon', ['ngRoute'])

    // 2.路由规则，自己维护自己
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/coming_soon',{// #/home_page
            templateUrl:'coming_soon/coming_soon.html',
            controller:'coming_soonController'
        })
    }])
    //创建控制器
    app.controller('coming_soonController',['$scope',function ($scope) {
        
    }])
})(angular)