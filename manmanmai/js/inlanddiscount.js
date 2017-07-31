$(function() {


    //模拟一下网络的延迟
    //以下的代码是国内折扣真实的实现代码
    // setTimeout(function(){
    // 	$.ajax({
    // 		url:"http://127.0.0.1:3000/api/getinlanddiscount",
    // 		dataType:"json",
    // 		success:function(data){
    // 			console.log(data);
    // 			var html = template("inlanddiscount-product-list-template",data);
    // 			$("#product > .product-list").html(html);

    // 			//隐藏加载中的效果
    // 			$("#product > .loading-info > img").css({
    // 				display:"none"
    // 			});
    // 			$("#product > .loading-info > .loading-tips").css({
    // 				display:"block"
    // 			});
    // 		}
    // });
    // },2000);
    //--------------------------------------------------------------------
    //以下的代码是为了实现滑动加载下一页的效果，而使用另外一个接口，分类下的商品列表接口
    var pageId = 1;
    var totalPage = 0;
    var isLoading = false;


    //在界面的入口函数中，要调用一次getProductList，把第一页的数据加载出来
    getProductList();



    //考虑在什么时机对pageId进行+1的操作，+1完之后，再次的获取服务器的数据
    //时机？什么时候能够滑动到界面的底部
    $(window).scroll(function() {

        //怎么知道滚动到底部了
        //   完整的高度=可见区域的高度+滚动的高度
        var totalHeight = $(document).height();
        var visibleHeight = $(window).height();
        // console.log(totalHeight,visibleHeight);
        var scrollTop = $(window).scrollTop();
        var footerHeight = $("#footer").height()
        if (visibleHeight + scrollTop >= totalHeight - footerHeight) {
            //console.log("加载图片完全显示出来了");
            if (!isLoading) {
                if (pageId >= totalPage) {
                    $("#product > .loading-info > img").css({
                        display: "none"
                    });
                    $("#product > .loading-info > .loading-tips").css({
                        display: "block"
                    });
                } else {
                    pageId = pageId + 1;
                    getProductList();
                }
            }


        }

    });
    //$().click();
    function getProductList() {
        isLoading = true;
        setTimeout(function() {
            $.ajax({
                url: "http://127.0.0.1:3000/api/getproductlist",
                dataType: "json",
                data: { categoryid: 0, pageid: pageId },
                success: function(data) {
                    console.log(data);
                    var html = template("inlanddiscount-product-list-template", data);
                    $("#product > .product-list").append(html);
                    totalPage = Math.ceil(data.totalCount / data.pagesize);
                    isLoading = false;
                    //隐藏加载中的效果
                    // $("#product > .loading-info > img").css({
                    //     display: "none"
                    // });
                    // $("#product > .loading-info > .loading-tips").css({
                    //     display: "block"
                    // });
                }
            });
        }, 2000);
    }



});