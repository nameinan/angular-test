'use strict';
var myApp= angular.module("routerApp",['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/first');
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('first', {
            url: '/first',
            templateUrl: 'public/pages/first.html',
            controller:'firstController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('second', {
            url: '/second',
            templateUrl: 'public/pages/second.html'  ,
             controller:'secondController'
        })
        
        .state('third', {
            url: '/third',
            templateUrl: 'public/pages/third.html'     
        });
    }).controller('MainController',function($scope){
    
         $scope.person = {
             name:'Nandakumar',
             address:'Phursungi Pune-412308 '
         } ;
    
    }).controller('firstController',function($scope,myService){
    
      $scope.name=myService.name;
      $scope.$watch('name',function(){
          myService.name= $scope.name;
      });
    
    }).controller('secondController',function($scope,myService){
       $scope.name=myService.name;
       $scope.$watch('name',function(){
              myService.name= $scope.name;
          });

    }).controller('thirdController',function($scope){
    
    
    }).service('myService',function(){
     //service is singleton in Nature while $scope is not
      self=this
      this.name='Nandakumar Nameirakpam';
      this.namelength=function(){
          return self.name.length;
      }
}).directive('mySearchResult',function(){
    //mySearchResult : normalized Name
    return {
        restrict:'AECM', //A:attri,E: ele, C:class, M:Comments
        templateUrl:'public/pages/address.html',    
        replace:true ,
        scope:{
        personObject:"="
    }
        
    };
});


    
    
