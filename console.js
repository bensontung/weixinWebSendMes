var appElement = document.querySelector('[ng-controller=chatSenderController]'); 
var $scope = angular.element(appElement).scope(); 
setInterval( function(){ 
  $scope.editAreaCtn = '定时发送信息'; //指定信息内容，可拉取自己服务器上实时信息 
  $scope.$apply(); 
  document.getElementsByClassName('btn_send')[0].click(); 
} ,10000); //10秒
