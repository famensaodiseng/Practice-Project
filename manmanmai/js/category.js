$(function(){

	$.ajax({
		url:"http://127.0.0.1:3000/api/getcategorytitle",
		dataType:"json",
		success:function(data){
			// console.log(data);
			var html = template("category-template",data);
			//console.log(html);
			$("#category").html(html);

			//1、循环操作
			//2、当我们点击某一个一级分类标题的时候，去获取这个一级分类下面的二级分类信息
			$("#category > .panel-group > .panel >.panel-heading > .panel-title > a").click(function(){

					//this-->当前这个a标签 data-title-my-id
					var titleId = this.dataset["titleMyId"];
					var targetContainerId = this.href.split("#")[1];

					var targetContainerHtml = $("#category > .panel-group > .panel > #" + targetContainerId + " > .panel-body").html();
					
					if(targetContainerHtml == "") {
						$.ajax({
							url:"http://127.0.0.1:3000/api/getcategory",
							dataType:"json",
							data:{titleid:titleId},
							success:function(data){
								var childCategoryHtml = template("child-category-template",data);
								//生成的html应该放到当前所点击的a标签对应的div容器之下
								//console.log(childCategoryHtml);
								$("#category > .panel-group > .panel > #" + targetContainerId + " > .panel-body").html(childCategoryHtml);
								
							}
						});
					}

					// return false;
					
					
			});
		}
	});



});