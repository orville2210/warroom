angular.module('WarRoom')
  .controller('HomeCtrl', function($scope) {

  $scope.class1 = "deselected";
  $scope.class2 = "deselected";
  $scope.class3 = "deselected";
  
  $scope.changeClassTicket1 = function(){
    if ($scope.class1 === "deselected")
      $scope.class1 = "selectedTicket";
      $scope.class2 = "deselected";
      $scope.class3 = "deselected";
    };
  $scope.changeClassTicket2 = function(){
    if ($scope.class2 === "deselected")
      $scope.class2 = "selectedTicket";
      $scope.class1 = "deselected";
      $scope.class3 = "deselected";
    };
  $scope.changeClassTicket3 = function(){
    if ($scope.class3 === "deselected")
      $scope.class3 = "selectedTicket";
      $scope.class1 = "deselected";
      $scope.class2 = "deselected";
    };
  
  $scope.showLogins = "false";
  if($scope.class1 === "selectedTicket")
    $scope.showLogins = "true";
});