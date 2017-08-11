/**
 * Created by Administrator on 2017/8/10.
 */
(function(angular){
    // 1.首页模块
    var app = angular.module('in_theaters', ['ngRoute'])

    // 2.路由规则，自己维护自己
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters',{// #/home_page
            templateUrl:'in_theaters/in_theaters.html',
            controller:'in_theatersController'
        })
    }])
    //创建控制器
    app.controller('in_theatersController',[
        '$scope',
        '$http',
        function($scope,$http) {

            $http.get('./in_theaters/data.json')
                .then(function(res) {
                  // console.log(res);
                    $scope.data= res.data
                })

    }])
})(angular)