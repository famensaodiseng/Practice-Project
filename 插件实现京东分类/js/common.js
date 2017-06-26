/*封装移动端的tap点击事件*/
/*
function  tap(){

}*/
var itcast={
    /*dom:传入的dom元素让我们可以为任意的元素添加tap事件*/
    tap:function(dom,callback){
        /*判断是否传入对象同时对象应该是一个dom元素*/
        if(!dom || typeof  dom!="object"){
            return;
        }
        var startTime,startX,startY;
        dom.addEventListener("touchstart",function(e){
            /*判断是否只有一根手指进行操作*/
            if(e.targetTouches.length > 1){ //说明不止一个手指
                return;
            }
            /*记录手指开始触摸的时间*/
            startTime=Date.now();
            /*记录当前手指的坐标*/
            startX= e.targetTouches[0].clientX;
            startY= e.targetTouches[0].clientY;
            /*来做一些与事件相关的初始化操作*/
        })

        /*touchend：当手指松开时候触发，意味着当前元素上已经没有手指对象了,所以无法通过targetTouches来获取手指对象*/
        dom.addEventListener("touchend",function(e){
            /*判断是否只有一根手指进行操作*/
            if(e.changedTouches.length > 1){ //说明不止一个手指
                return;
            }
            if(Date.now()-startTime > 150){ //长按操作
                return;
            }
            /*判断松开手指时的坐标与触摸开始时的坐标的距离差异*/
            var endX=e.changedTouches[0].clientX;
            var endY=e.changedTouches[0].clientY;
            /*这里暂且将距离差异定为6*/
            if(Math.abs(endX-startX) < 6 && Math.abs(endY-startY) <6){
                console.log("这就是移动端的单击事件--tap事件");
                /*执行tap事件响应后的处理操作*/
                /*判断用户是否传入的回调函数*/
                callback && callback(e);
            }
        })
    }
};
