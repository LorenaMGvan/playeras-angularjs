angular.module('shirtApp.carrito', [])

//FacPaises
.controller('cartCtrl', ['$scope', '$cookies', '$filter' , '$location', '$log', 'FacPaises',  function($scope, $cookies, $filter, $location, $log, FacPaises) {        
        $scope.$log = $log;                    
        $scope.readybuy = false;
        $scope.endbuy = false;
        $scope.total = 0;
        $scope.user = {};        
        $scope.paisesOpc = {};             
        $scope.statescontryOpc = [];        
        $scope.paisesPhoneOpc = {};
        $scope.countryFlag = "";
        $scope.countryPhoneCode = "";
        $scope.statusApiCountry = {};        


        $scope.title = "Hola mundo";

        $scope.getPaisesSelect = () => {

                FacPaises.getCountrys().then( function (response) { 
                        
                        $scope.paisesOpc = FacPaises.countrys;   

                        $filter('filter')(response, function(pais) {
                                if(pais.isoCode == "MX") { 
                                        $scope.user.pais = pais;                          
                                        $scope.countryPhoneCode = pais.phonecode;                                                                                                                                      
                                        return true;
                                }
                        });                                                                                       
                        
                }).catch(function(error){                                                 
                        $scope.statusApiCountry = error;
                        $log.info("error en API paises");                          
                        $log.info(error);                      
                }); 
                                         
        }     


        // $scope.getStatesSelect = (codPai) => {
        //         FacPaises.getStates().then( function (response) {                          
                        
        //                 $filter('filter')(response, function(state) {

        //                         if(state.countryCode == codPai) {                                                                                                                                                         
        //                                 $scope.statescontryOpc.push(state);        
        //                                 $scope.user.statecountry = state;                          
        //                                 return true;
        //                         }
        //                 });   
                                                
        //         }).catch(function(error){                                                 
        //                 $log.info(error);                        
        //         });                          
        // }    

        // $scope.getPaisesSelect();
        // $scope.getStatesSelect("MX");


        // $scope.selectStateUser = () => {        
        //         //$scope.getStatesSelect();                                                                           
        // }

        // $scope.selectCountryUser = () => {                
        //         $scope.countryPhoneCode = $scope.user.pais.phonecode;                                                 
        //         $scope.statescontryOpc = [];
        //         $scope.getStatesSelect($scope.user.pais.isoCode);
        // }

        // $scope.getTotal = () => {                
        //         angular.forEach($scope.cart, function(value, key) {
        //         $scope.total += value.qty * value.subtotal;                        
        //         });            
        // }        

        // $scope.removePlayera = function(idPlayera) {                                                
        //         $filter('filter')($scope.cart, function(item) {
        //                 if(idPlayera == item.id){                                        
        //                         $scope.posPlayera = $scope.cart.indexOf(item);
        //                         $scope.cart.splice($scope.posPlayera, 1 );   
        //                         $cookies.putObject('cart', $scope.cart);
        //                         return true;
        //                 }                
        //                 return false;
        //         });                       
        // }

        // $scope.addCart = () => {
        //         $scope.readybuy = true;                
        // }

        // $scope.customqty = (product, opc) => {
                                
        //         $filter('filter')($scope.cart, function(item) {
        //                 if(product.id == item.id){                                        
        //                         $scope.posPlayera = $scope.cart.indexOf(item);

        //                         if(opc === "plus") {                        
        //                                 product.qty++;
        //                                 $scope.cart[$scope.posPlayera].qty = product.qty;
        //                                 $scope.total += 150; 
        //                         } else {
        //                                 if(product.qty > 1) {
        //                                         product.qty--;
        //                                         $scope.cart[$scope.posPlayera].qty = product.qty;
        //                                         $scope.total -= 150; 
        //                                 } else {
        //                                         $scope.cart.splice($scope.posPlayera, 1 );                   
        //                                 }                                                                        
        //                         }
                                                                                                
        //                         $cookies.putObject('cart', $scope.cart);
        //                         return true;
        //                 }                
        //                 return false;
        //         });                                
                                
        // }         

        // $scope.buy = () => {   
        //         $scope.endbuy = true;                
        // }   
                
        // $scope.buttoncancel = () => {
        //         $scope.readybuy = false;
        // }
                
        // $scope.getTotal();        
        }]);


// app.directive('aGreatEye', function () {
//         return {
//                 restrict: 'E',
//                 replace: true,
//                 template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
//         };
// });


// app.directive('fieldNumber', function() {
//                 return {
//                         require: 'ngModel',
//                         restrict: 'A',
//                         link: function(scope, element, attr, ngModel) {
                        
//                                 ngModel.$formatters.push(function (value){     
//                                         if (value == undefined) return;                                                                
//                                         let fieldNumber = value.toString().replace(/[^0-9]/g, '');

//                                         return  fieldNumber;
//                                 });
                        
//                                 ngModel.$parsers.push(function (value) {                            
//                                         let fieldNumber = value.toString().replace(/[^0-9]/g, '');                        
//                                         ngModel. $setViewValue(fieldNumber);
//                                         ngModel.$render();

//                                         return fieldNumber;
//                                 });
//                                 }
//                 }
// });

