// https://github.com/blaurijs/AngularJS-Advanced-Framework-Techniques/tree/master/ModLab1-services-factories

describe('Pruebas carrito', function() {

  let $scope, $rootScope, $controller, ctrl, $filter, $cookies, $location, FacPaises, $httpBackend;
  let resultPaises;
  let dataWeWantToGet = [ "put", "your", "data", "here" ]; 

  let paisesList = [{
        "isoCode": "AF",
        "name": "Afghanistan",
        "phonecode": "93",
        "flag": "🇦🇫",
        "currency": "AFN",
        "latitude": "33.00000000",
        "longitude": "65.00000000",
        "timezones": [
            {
                "zoneName": "Asia\/Kabul",
                "gmtOffset": 16200,
                "gmtOffsetName": "UTC+04:30",
                "abbreviation": "AFT",
                "tzName": "Afghanistan Time"
            }
        ]
    },
    {
        "isoCode": "AX",
        "name": "Aland Islands",
        "phonecode": "+358-18",
          "flag": "🇦🇽",
          "currency": "EUR",
          "latitude": "60.11666700",
          "longitude": "19.90000000",
          "timezones": [
              {
                  "zoneName": "Europe\/Mariehamn",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
  }];
   
  beforeEach(angular.mock.module('ngCookies', 'shirtApp.carrito.paises', 'shirtApp.carrito'));

  beforeEach(inject(function (_$q_ , _$rootScope_, _$controller_ , _$cookies_, _$filter_, _$location_, _FacPaises_, _$httpBackend_) {    
    $q = _$q_;
    $rootScope = _$rootScope_;      
    $controller = _$controller_;    
    $cookies = _$cookies_;
    $filter = _$filter_;
    $location = _$location_;     
    FacPaises  = _FacPaises_;
    $httpBackend = _$httpBackend_;

    // test    
    //7. expectGET to make sure this is called once.
    // httpBackend.expectGET("http://localhost:36337/api/EmployeeInfoAPI/1").respond(returnData);
      
      // FacPaises.getCountrys().then(function(response) {
      //   paises = response;
      // })
    
    // end test

  }));


  afterEach(function () {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });


  describe('Prueba A', function() {
    
    it("Titulo debe ser hola Mundo", function() {
     
      $scope = $rootScope.$new();         
      $controller = $controller('cartCtrl', {$scope: $scope});      

      expect($scope.title).toEqual('Hola mundo');
  
    });


    it('Obtiene los paises de getCountrys', function () {      

      $httpBackend.whenGET('js/country.json')
                  .respond(paisesList);
      
      FacPaises.getCountrys().then(function(response) {
        resultPaises = response.data;        
      })

      $httpBackend.flush();

      //11. check the result.          
      expect(resultPaises).toEqual(paisesList);      
    });

    // it('Obtiene los paises de getCountrys', function () {      
    //   $httpBackend.whenGET('js/country.json')
    //               .respond({ data: paisesList });
      
    //   FacPaises.getCountrys().then(function(response) {
    //     paises = response;
    //   })
    //   $httpBackend.flush();
    //   expect(paises).toBe;
    // });

    // it('gets a user and updates customProperty', function () {
    //   $httpBackend.whenGET('/api/users/123').respond({ id: 123 });
    //   User.get(123).then(function(response) {
    //     user = response;
    //   })
    //   $httpBackend.flush();
    //   expect(user.customProperty).toBe(true);
    // });


  });
 
});
