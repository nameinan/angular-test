var app= angular.module('test-app',['ngRoute']);


app.config(function($routeProvider,$locationProvider){
     $routeProvider
        .when('/',{
           
            templateUrl:'public/pages/second.html'
         /*   controller: 'first-controller'*/
        })

        .when('/first',{
            templateUrl:'public/pages/first.html'
           /* controller: 'first-controller'*/
        })

        .when('/second',{
            templateUrl:'public/pages/second.html'
           /* controller:'second-controller'*/
        })

        .when('#/third',{
            templateUrl:'public/pages/third.html'
            /*controller:'third-controller'*/
        }).otherwise({ 
           templateUrl:'public/pages/third.html'
      });

      // $locationProvider.html5Mode(true);

   
    
});

/*


app.controller('first-controller',['$scope','$route', '$routeParams', '$location',
            function ($scope,$route, $routeParams, $location){

}]);


app.controller('second-controller',['$scope','$route', '$routeParams', '$location',
            function ($scope,$route, $routeParams, $location){

}]);


app.controller('third-controller',['$scope','$route', '$routeParams', '$location',
            function ($scope,$route, $routeParams, $location){

}]);
*/



