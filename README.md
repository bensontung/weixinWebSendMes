# weixinWebSendMes
网页版微信定时推关信息

用chrome登录网页版微信,打开console，输入以下代码

var appElement = document.querySelector('[ng-controller=chatSenderController]');
var $scope = angular.element(appElement).scope();
setInterval(
    function(){
        $scope.editAreaCtn = '定时发送信息';  //指定信息内容，可拉取自己服务器上实时信息
        $scope.$apply();
        document.getElementsByClassName('btn_send')[0].click();
    }
    ,10000); //10秒发送
