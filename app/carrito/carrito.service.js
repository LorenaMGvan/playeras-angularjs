
angular.module('shirtApp.carrito.paises', [])

.factory('FacPaises', [ '$rootScope', '$q', '$http', function ($rootScope, $q, $http) {

        let self = {
                countrys: [],
                getCountrys: getCountrys,
                getStates: getStates
        }; 
        
        function getCountrys() {
                let q = $q.defer();                                  
                // inicialmente usaba la API comentada, lo cual cambio para evitar el limite de uso
                //$http.get("http://api.countrylayer.com/v2/region/americas?access_key=??????????")
                $http.get("js/country.json")
                .then(function(response) {                              
                        self.countrys = response.data;                              
                        q.resolve(response.data); 
                })
                .catch(function(error) {
                        return q.reject(error);
                });                
                                                                
                return q.promise;
        } 
        
        function getStates() {
                let q = $q.defer();

                $http.get("js/state.json")
                .then(function(response) {                              
                        q.resolve(response.data); 
                })
                .catch(function(error) {
                        return q.reject(error);
                });                
                                                                
                return q.promise;
        }  
       
        return self; 

}]);
