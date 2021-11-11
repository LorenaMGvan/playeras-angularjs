
angular.module('shirtApp.playeraTabs', [])

.directive('tabsGral', function() {
    return {
      scope: true,
      replace: true,
      restrict: 'E',
      transclude: true,
      template: ' \
                <div id="ejemplo"+ class="tab-content"> \
                    <ul class="tabs-nav"> \
                    <li ng-repeat="tab in tabs" \
                        ng-class="{ active: currentTab == $index }"> \
                        <a ng-click="selectTab($index)"> \
                        {{tab}} \
                        </a> \
                    </li> \
                    </ul> \
                    <div ng-transclude></div> \
                </div>',
      controller: function($scope) {
        $scope.currentTab = 0;
        
        $scope.tabs = [];
        
        $scope.selectTab = function(index) {
          $scope.currentTab = index;
        };
        
        return $scope;
      }
    }
  })

.directive('contentTab', function() {
  return {
    require: '^tabsGral',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: '<div class="tab-content" ng-show="showTab()" ng-transclude></div>',
    link: function(scope, element, attrs, sectabs) {
      var tabId = sectabs.tabs.length;
      
      scope.showTab = function() {
        return tabId == sectabs.currentTab;
      };
      
      sectabs.tabs.push(attrs.datHeading);
    }
  }
});

