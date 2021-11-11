xdescribe('Pruebas en Playera', function() {
  
  beforeEach(angular.mock.module('ngCookies', 'shirtApp.playera'));

  let $filter, $cookies, $location, lisTipografias;
  
  //$scope','$cookies','$filter','$location

   describe('controlador playeraCtrl:', function() {
      
      beforeEach(angular.mock.inject(function($rootScope, $controller, _$cookies_, _$filter_, _$location_) {
      scope = $rootScope.$new();                                      
      ctrl = $controller('playeraCtrl', {$scope: scope});
      $cookies = _$cookies_;
      $filter = _$filter_;
      $location = _$location_;
      //
      lisTipografias = ['roboto','oswald','allison'];      
      // $cookies = jasmine.createSpyObj("$cookies", ["get", "put"]);
      // $cookies.get.and.returnValue("<valid Login Token Goes Here>");
      // cookies = $injector.get('$cookies')

      }));
  //     it('testando el mensaje', function () {
  //         expect(scope.message).toBe("Hello angular");
  //     });

      it('objeto shirt definido', function () {
        expect(scope.shirt).toBeDefined();
      });

      it('Imagen de Playera negra por default', function () {
          expect(scope.shirt.imgpreview).toBe("img/negro.jpg");
      });

      it('Playera color negra por default', function () {        
        expect(scope.shirt.color).toBe("negro");
      });      

      it('Tipografias validas', function () {        
        expect(lisTipografias).toEqual(jasmine.arrayContaining(['roboto']));
      });      

      it('Mensaje inicial: Hola Mundo', function(){
        expect(scope.shirt.messagetest).toBe("Hola Mundo");
      });

      it('Precio de playera = 150', function(){
        expect(scope.precio).toEqual(150);
      });

      it('cantidad mínima de playera = 1', function(){
        expect(scope.shirt.qty).toEqual(1);
      });
      // it('colocar cookie cart', function () {
      //   $cookies.put('cart', 'cookieValue');
      //   expect($cookies.get('cart')).toBe('cookieValue');
      // });
      it('No debe haber cookie cart', function () {
        expect($cookies.get('cart')).not.toBeDefined();
      });

      // $scope.shirt.areaprint
      // $scope.shirt.colortext
      // $scope.itemCar
      // $scope.cartArrObj
      // $scope.cartArr
      // $scope.shirt.subtotal

   });
 
});
