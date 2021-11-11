

let addInputsStyle = (attrs) => {
  
  let el = document.querySelector("#" + attrs.id);
  let classOnLabel = '.groupradio--' + attrs.idRadio + ' .item';
  let labelAll = document.querySelectorAll(classOnLabel);
  
  for (let i = 0; i < labelAll.length; i++) {
    labelAll[i].classList.remove('radio-on')
  }
  
  el.classList.add("radio-on");
}

angular.module('shirtApp.playeraRadios', [])

.directive('groupRadios', function ($parse) {
  return {
    scope: true,
    replace: true,
    restrict: 'E',
    transclude: true,
    template: `<div class="form-group form-group--radio form-group-label {{ classGroup }}">                   
                        <div ng-transclude></div>
                   </div>`,
    link: function (scope, element, attrs) {
      scope.classGroup = 'groupradio--' + attrs.groupType;
    },
    controller: function ($scope) {
      return $scope;
    }
  }
})

.directive('groupRadiosItem', function ($compile) {
  return {
    require: '^groupRadios',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: `<label class="item">
                    <input name="{{ valItem }}"                        
                        type="radio"                        
                        class="form-control option-input radio"                                    
                        value="{{ valItem }}">
                    <span>{{ valItem }} </span>
                </label>`,

    link: function (scope, element, attrs) {
      let fieldRadio = element[0].children[0];
      scope.valItem = attrs.value;

      fieldRadio.setAttribute('ng-model', attrs.modRadio);

      if (attrs.idRadio == "color") {
        fieldRadio.setAttribute('cambiar-playera', scope.valItem);
      }

      element.on('click', function (event) {
        addInputsStyle(attrs);
      });
      // Recompile the entire element
      $compile(element)(scope);
    }
  }
})

.directive('cambiarPlayera', function () {
  return {
    restrict: 'A',
    scope: false,
    link: function postLink(scope, element, attrs) {

      let dirImg = "img";

      element.on('click', function (event) {
        scope.shirt.imgpreview = `${dirImg}/${attrs.value}.jpg`;

        if (attrs.value == "blanco") {
          scope.prevInitShirt['background-color'] = "rgb(8 2 2 / 13%)";       
        } else {
          scope.prevInitShirt['background-color'] = "rgb(255,255,255,0.4)";
        }

      });
      // scope.$watch("shirt.color", function() {        
      // });    

    }
  }
});