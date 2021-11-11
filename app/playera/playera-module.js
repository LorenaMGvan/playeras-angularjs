angular.module('shirtApp.playera',[])

.controller('playeraCtrl', ['$scope','$cookies','$filter','$location', function($scope, $cookies, $filter, $location) {
    
    let dirImg = "img";
    $scope.footerDate = new Date();
    $scope.shirt = {};
    $scope.shirt.color = 'negro';
    $scope.shirt.tipografia = "roboto";
    $scope.shirt.messagetest = "Hola Mundo";
    $scope.shirt.imgpreview = `${dirImg}/negro.jpg`;
    $scope.shirt.areaprint = 'pecho';
    $scope.shirt.colortext = '#ffffff';
    $scope.shirt.qty = 1;
    $scope.itemCar = {};     
    $scope.cartArrObj = {};   
    $scope.cartArr = [];       
    $scope.precio = 150;
    $scope.shirt.subtotal = $scope.precio * $scope.shirt.qty;    
    //$scope.shirt.sizetext = '25px';    
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);     
    
    $scope.prevInitShirt = {
        "color" : $scope.shirt.colortext,
        "background-color" : "rgb(8 2 2 / 13%)",
        "font-size" : "30px",
    }

    if (!angular.isUndefined($cookies.get('cart'))) {          
        $scope.cart = $cookies.getObject('cart')        
    } else {
        $scope.cart = [];
    }
    

    $scope.submitCustomShirt = function(shirt) {                        
        $scope.shirt.id = $filter('date')(new Date(),'yyyyMMdd-hhmmss');                
        $scope.cart.push(shirt);        
        //$cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
        $cookies.putObject('cart', $scope.cart);
        $scope.cart = $cookies.getObject('cart');        
        $location.path('/carrito')
    };    

    $scope.changeSizeText = () => {   
        $scope.prevInitShirt['font-size'] = `${$scope.shirt.sizetext}px`;                   
    }

    $scope.changeColorText = () => {        
        $scope.prevInitShirt.color = $scope.shirt.colortext;
    }

    $scope.changeTypoShirt = () => {  

        let textPrev = document.querySelector('.shirt-caption');

        for( let item=0; item < textPrev.classList.length; item++ ) {
            if(textPrev.classList[item].startsWith('font-')) {
                textPrev.classList.remove(textPrev.classList[item]);
            }
        }
            
        textPrev.classList.add(`font-custom-${$scope.shirt.tipografia}`);           
    }
    
    
}]);

