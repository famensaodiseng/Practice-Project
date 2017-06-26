/*create by itcast*/
window.onload=function(){
    searchEffect();

    timeBack();

    bannerEffect();
}

/*头部的js效果*/
function searchEffect(){
    /*头部搜索块的js效果*/
    /*1.获取当前banner的高度*/
    var banner =document.querySelector(".jd_banner");
    var bannerHeight=banner.offsetHeight;
    /*获取header搜索块*/
    var search=document.querySelector(".jd_search");
    /*2.获取当前屏幕滚动时，banner滚动出屏幕的距离*/
    window.onscroll=function(){
        var offsetTop=document.body.scrollTop;
        /*3.计算比例值，获取透明度，设置背景颜色的样式*/
        var opacity=0;
        /*判断，如果当banner还没有完全 滚出屏幕，那么才有必要计算透明度和设置透明度*/
        if(offsetTop < bannerHeight){
            opacity=offsetTop/bannerHeight;
            /*设置样式*/
            search.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        }
    }
}

/*倒计时效果*/
function timeBack(){
    /*1.获取用于展示时间的span*/
    var spans=document.querySelector(".jd_sk_time").querySelectorAll("span");
    /*2.设置初始的倒计时时间,以秒做为单位*/
    var totalTime=3700; //1*60*60   3700%3600=100 /60
    /*3.开启定时器*/
    var timerId=setInterval(function(){
        totalTime--;
        /*判断倒计时时间是否已经完成*/
        if(totalTime < 0){
            /*清除时钟*/
            clearInterval(timerId);
            return;
        }
        /*得到剩余时间中的  时  分  秒*/
        /*获取时*/
        var hour=Math.floor(totalTime/3600);
        /*获取分*/
        var minute=Math.floor(totalTime%3600/60);
        /*获取秒*/
        var second=Math.floor(totalTime%60);
        /*赋值，将时间填充到span中  12*/
        spans[0].innerHTML=Math.floor(hour/10);
        spans[1].innerHTML=Math.floor(hour%10);

        spans[3].innerHTML=Math.floor(minute/10);
        spans[4].innerHTML=Math.floor(minute%10);

        spans[6].innerHTML=Math.floor(second/10);
        spans[7].innerHTML=Math.floor(second%10);
    },1000);
}

/*轮播图*/
function  bannerEffect(){
    /*1.设置修改轮播图的页面结构
    * a.在开始位置添加原始的最后一张图片
    * b.在结束位置添加原始的第一张图片*/
    /*1.1.获取轮播图结构*/
    var banner=document.querySelector(".jd_banner");
    /*1.2.获取图片容器*/
    var imgBox=banner.querySelector("ul:first-of-type");
    /*1.3.获取原始的第一张图片*/
    var first=imgBox.querySelector("li:first-of-type");
    /*1.4.获取原始的最后一张图片*/
    var last=imgBox.querySelector("li:last-of-type");
    /*1.5.在首尾插入两张图片   cloneNode:复制一个dom元素*/
    imgBox.appendChild(first.cloneNode(true));
    /*insertBefore(需要插入的dom元素，位置)*/
    imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);

    /*2.设置对应的样式*/
    /*2.1获取所有图片li元素*/
    var lis=imgBox.querySelectorAll("li");
    /*2.2 获取li元素的数量*/
    var count=lis.length;
    /*2.3.获取banner的宽度*/
    var bannerWidth=banner.offsetWidth;
    /*2.4 设置图片盒子的宽度*/
    imgBox.style.width=count*bannerWidth+"px";
    /*2.5 设置每一个li(图片)元素的宽度*/
    for(var i=0;i<lis.length;i++){
        lis[i].style.width=bannerWidth+"px";
    }

    /*定义图片索引:图片已经有一个宽度的默认偏移*/
    var index=1;

    /*3.设置默认的偏移*/
    imgBox.style.left=-bannerWidth+"px";

    /*4.当屏幕变化的时候，重新计算宽度*/
    window.onresize=function(){
        /*4.1.获取banner的宽度,覆盖全局的宽度值*/
        bannerWidth=banner.offsetWidth;
        /*4.2 设置图片盒子的宽度*/
        imgBox.style.width=count*bannerWidth+"px";
        /*4.3设置每一个li(图片)元素的宽度*/
        for(var i=0;i<lis.length;i++){
            lis[i].style.width=bannerWidth+"px";
        }
        /*4.4重新设置定位值*/
        imgBox.style.left=-index*bannerWidth+"px";
    }

    /*实现点标记*/
   var setIndicator=function(index){
       var indicators=banner.querySelector("ul:last-of-type").querySelectorAll("li");
       /*先清除其它li元素的active样式*/
       for(var i=0;i<indicators.length;i++){
           indicators[i].classList.remove("active");
       }
       /*为当前li元素添加active样式*/
       indicators[index-1].classList.add("active");
   }

    var timerId;
    /*5.实现自动轮播*/
    var startTime=function(){
        timerId=setInterval(function(){
            /*5.1 变换索引*/
            index++;
            /*5.2.添加过渡效果*/
            imgBox.style.transition="left 0.5s ease-in-out";
            /*5.3 设置偏移*/
            imgBox.style.left=(-index*bannerWidth)+"px";
            /*5.4 判断是否到最后一张，如果是则回到索引1的位置*/
            setTimeout(function(){
                if(index==count-1){
                    index=1;
                    /*如果一个元素的某个属性之前添加过过渡效果，那么过渡属性会一直存在，如果不想要，则需要清除过渡效果*/
                    /*关闭过渡效果*/
                    imgBox.style.transition="none";
                    /*偏移到指定的位置*/
                    imgBox.style.left=(-index*bannerWidth)+"px";
                }
            },500);
        },1000);
    }
    startTime();

    /*6.实现手动轮播*/
    var startX,moveX,distanceX;
    /*标记当前过渡效果是否已经执行完毕*/
    var isEnd=true;
    /*为图片添加触摸事件--触摸开始*/
    imgBox.addEventListener("touchstart",function(e){
        /*清除定时器*/
        clearInterval(timerId);
        /*获取当前手指的起始位置*/
        startX= e.targetTouches[0].clientX;
    });
    /*为图片添加触摸事件--滑动过程*/
    imgBox.addEventListener("touchmove",function(e){
        if(isEnd==true){
            console.log("touchmove");
            /*记录手指在滑动过程中的位置*/
            moveX= e.targetTouches[0].clientX;
            /*计算坐标的差异*/
            distanceX=moveX-startX;
            /*为了保证效果正常，将之前可能添加的过渡样式清除*/
            imgBox.style.transition="none";
            /*实现元素的偏移  left参照最原始的坐标
             * 重大细节：本次的滑动操作应该基于之前轮播图已经偏移的距离*/
            imgBox.style.left=(-index*bannerWidth + distanceX)+"px";
        }
    });
    /*添加触摸结束事件*/
    /*touchend:松开手指触发*/
    imgBox.addEventListener("touchend",function(e){
        /*松开手指，标记当前过渡效果正在执行*/
        isEnd=false;
        /*获取当前滑动的距离，判断距离是否超出指定的范围 100px*/
        if(Math.abs(distanceX) > 100){
            /*判断滑动的方向*/
            if(distanceX > 0){//上一张
                index--;
            }
            else{ //下一张
                index++;
            }
            /*翻页*/
            imgBox.style.transition="left 0.5s ease-in-out";
            imgBox.style.left=-index*bannerWidth+"px";
        }
        else if(Math.abs(distanceX) > 0){ //得保证用户确实进行过滑动操作
            /*回弹*/
            imgBox.style.transition="left 0.5s ease-in-out";
            imgBox.style.left=-index*bannerWidth+"px";
        }
        /*将上一次move所产生的数据重置为0*/
        startX=0;
        moveX=0;
        distanceX=0;
    });

    /*webkitTransitionEnd:可以监听当前元素的过渡效果执行完毕，当一个元素的过渡效果执行完毕的时候，会触发这个事件*/
    imgBox.addEventListener("webkitTransitionEnd",function(){
        console.log("webkitTransitionEnd");
        /*如果到了最后一张(count-1)，回到索引1*/
        /*如果到了第一张(0)，回到索引count-2*/
        if(index==count-1){
            index=1;
            /*清除过渡*/
            imgBox.style.transition="none";
            /*设置偏移*/
            imgBox.style.left=-index*bannerWidth+"px";
        }
        else if(index==0){
            index=count-2;
            /*清除过渡*/
            imgBox.style.transition="none";
            /*设置偏移*/
            imgBox.style.left=-index*bannerWidth+"px";
        }
        /*设置标记*/
        setIndicator(index);
        setTimeout(function(){
            isEnd=true;
            /*清除之前添加的定时器*/
            clearInterval(timerId);
            //重新开启定时器
            startTime();},100);
    });
}
