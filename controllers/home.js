angular.module('WarRoom')
  .controller('HomeCtrl', function($scope) {

  $scope.class1 = "deselected";
  $scope.class2 = "deselected";
  $scope.class3 = "deselected";
  $scope.showLogins = false;
  
  $scope.changeClassTicket1 = function(){
    if ($scope.class1 === "deselected")
      $scope.class1 = "selectedTicket";
      $scope.class2 = "deselected";
      $scope.class3 = "deselected";
      $scope.showLogins = true;
    };
  $scope.changeClassTicket2 = function(){
    if ($scope.class2 === "deselected")
      $scope.class2 = "selectedTicket";
      $scope.class1 = "deselected";
      $scope.class3 = "deselected";
      $scope.showLogins = true;
    };
  $scope.changeClassTicket3 = function(){
    if ($scope.class3 === "deselected")
      $scope.class3 = "selectedTicket";
      $scope.class1 = "deselected";
      $scope.class2 = "deselected";
      $scope.showLogins = true;
    };
  
  $scope.probStatModalShown = false;
  $scope.toggleProbStatModal = function() {
    $scope.probStatModalShown = !$scope.probStatModalShown;
  };
  
  $scope.termsNconditionsModalShown = false;
  $scope.toggleTnCModal = function() {
    $scope.termsNconditionsModalShown = !$scope.termsNconditionsModalShown;
  };
});