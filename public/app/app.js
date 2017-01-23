//'use strict';
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
        })
        
        .state('person', {
            url: '/person',
            templateUrl: 'public/pages/persons.html'     
        });
    }).controller('MainController',function($scope){
    
         $scope.person = {
             name:'Nandakumar',
             city:'Pune',
             state:'Maharashtra',
             pin: '412308'
         } ;
    
    
         $scope.people = [{
             name:'Nandakumar',
             city:'Pune',
             state:'Maharashtra',
             pin: '412308'
         },{
             name:'Vedant',
             city:'Pune',
             state:'Maharashtra',
             pin: '412308'
         },{
             name:'Meenakshi',
             city:'Pune',
             state:'Maharashtra',
             pin: '412308'
         },{
             name:'Naomacha',
             city:'Pune',
             state:'Maharashtra',
             pin: '412308'
         }] ;
    
         $scope.formattedAddress = function(person){
             return  person.city + ' ' + person.state + ' ' + person.pin;
         }
    
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
        transclude: true,
        scope:{
        personObject:"=",
        formattedAddressFunction:"&"
        },
        link:function(scope,elements,attrs){
                  console.log('linking');
                  console.log(scope);
                  if(scope.personObject.name=='Vedant')  {
                      elements.removeAttr('class');
                  }  
                 console.log(elements);
            
        }
       
       
    }

});


    
    
