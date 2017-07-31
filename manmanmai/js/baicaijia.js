$(function() {
    //需要对触摸事件进行监听
    //事件序列：   按下(一个)   移动(n个)  抬起 (一个)
    var startX = 0;
    $("ul").on("touchstart", function(e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    $("ul").on("touchmove", function(e) {

        var moveX = e.originalEvent.touches[0].clientX;

        var offsetX = moveX - startX; //得到移动的偏移量
        //获取当前已经偏移的值  在此基础之上，进行offsetX的增加
        var oldTranslateX = 0;
        if ($("ul").css("transform") == "none") {
            oldTranslateX = 0;
        } else {
            oldTranslateX = parseInt($("ul").css("transform").split(",")[4]);
        }
        var newTranslateX = oldTranslateX + offsetX;
        console.log("newTranslateX=" + newTranslateX);
        //console.log(offsetX);
        $("ul").css({
            transform: "translateX(" + newTranslateX + "px)",
            transition: "none"
        });
        startX = moveX; //在此需要对startX进行重新的赋值
    });
    $("ul").on("touchend", function(e) {
        console.log("抬起");
        //判断当前的translateX是否在正常的范围内
        var finalTranslateX = parseInt($("ul").css("transform").split(",")[4]);
        var maxTranslateX = -$("ul").width() + $(".baicaijia-title").width();
        if (finalTranslateX > 0) {
            finalTranslateX = 0;
        } else if (finalTranslateX < maxTranslateX) {
            finalTranslateX = maxTranslateX;
        }

        $("ul").css({
            transform: "translateX(" + finalTranslateX + "px)",
            transition: "transform 500ms"
        });
    });


    $.ajax({
        url: "http://127.0.0.1:3000/api/getbaicaijiatitle",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var html = template("baicaijia-title-template", data);
            $(".baicaijia-title > ul").html(html);
            //默认将数据中的第0项的商品列表加载出来
            getProductList(data.result[0].titleId);

            $("ul").width(100 * data.result.length);

            $("ul > li:first-of-type > a").addClass("haha");

            $("ul > li > a").click(function() {
                $("ul > li > a").removeClass("haha");
                $(this).addClass("haha");

                var targetTitleId = this.dataset["titleId"];
                getProductList(targetTitleId);

                return false;
            });
        }
    });

    function getProductList(titleId) {
        $.ajax({
            url: "http://127.0.0.1:3000/api/getbaicaijiaproduct",
            dataType: "json",
            data: { titleid: titleId },
            success: function(data) {
                //得到数据时候，使用模板，将html生成
                //生成的html放到product-list里面来
            }
        });
    }
});