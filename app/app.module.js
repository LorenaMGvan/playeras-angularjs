let app = angular.module('shirtApp',[
                          'ngRoute', 
                          'ngCookies',
                          'shirtApp.carrito.paises',
                          'shirtApp.carrito',
                          'shirtApp.playera',
                          'shirtApp.playeraTabs',
                          'shirtApp.playeraRadios'
                        ]);

app.config(['$routeProvider', '$httpProvider' ,  

    function ($routeProvider, $httpProvider) { 

        $routeProvider.when('/playera', {
            templateUrl: 'playera/playera.html'
          }).when('/carrito', {
            templateUrl: 'carrito/carrito.html'
          }).when('/pruebas', {
            templateUrl: 'pruebas.html'
          }).otherwise('playera');      
      
      $httpProvider.interceptors.push(function($injector, $location, $q) {
        
        return {
          response: function(response) {
            
            if(response.status != 200) {
              return $q.reject(rejection);
            }        
            return response;
          },
        
          responseError: function(res) {
            switch (res.status) {
              case 401:
                console.info('wrong usename or password');
                break;
              case 403:
                console.info('no rights to do this');           
                break;
                case 429:
                console.info('Many Many question !');
                break;
              case 500:
                console.info('server internal error: ' + res.data);
                break;
              default:
                console.info('error ' + res.status + ': ' + res.data);
            }     

            return $q.reject(res);      
          } 
        };
      });
    }
]);



