$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/api/getindexmenu",
		dataType:"json",
		success:function(data){
			//把数据变成html片段   将数据和模板结合起来生成html片段
			var html = template("menu-template",data);
			$("#menu").html(html);
			

			//把最后几个div隐藏起来
			$("#menu > .row > div:nth-last-of-type(-n+4)").css({
				height:"0px"
			});

			
			var normalHeight = $("#menu > .row > div:nth-of-type(8)").height();
			//设置点击事件，一定是要在这个元素存在的情况之下进行设置
			$("#menu > .row > div:nth-of-type(8) > a").click(function(){

				//最后一个元素的高度是一直在变化的，所以我们只有在点击事件这个触发条件发生的时候再去获取最新的最后一个元素的高度
				var lastElementHeight = $("#menu > .row > div:last-of-type").height();
				//判断当前的状态
				if(lastElementHeight == 0) {
					$("#menu > .row > div:nth-last-of-type(-n+4)").css({
						height:normalHeight + "px"
					});
				} else {
					$("#menu > .row > div:nth-last-of-type(-n+4)").css({
						height:"0px"
					});
				}

				return false;
				
				
			});

		}
	});
	$.ajax({
			type:"get",
			url:"http://127.0.0.1:3000/api/getmoneyctrl",
			dataType:"json",
			success:function(data){
				var html = template("product-list-template",data);
				$("#recommend > .recommend-list").html(html);
			}
	});


	

	// var btn;
	// btn.onclick = function(){


	// 	//xxxxxxx


	// 	function haha(){

	// 	}

	// 	haha();
	// };
	// haha();

	// window.onload = function(){
	// 	function hehe(){

	// 	}

	// 	hehe();
	// }

	// hehe();

	
});

