$(function(){


	var categoryId = getUrlParams("categoryid");
	console.log("categoryId=" + categoryId);
	var pageId = 1;

	getProductList(categoryId,pageId);

	function getProductList(categoryid,pageid) {
		$.ajax({
			url:"http://127.0.0.1:3000/api/getproductlist",
			dataType:"json",
			data:{categoryid:categoryid,pageid:pageid},
			success:function(data){
				console.log(data);
				var html = template("product-list-template",data);
				$("#product > .product-list").html(html);

				var totalPage = Math.ceil(data.totalCount / data.pagesize);
				var optionTag = '';
				for(var i=0;i<totalPage;i++) {
					if((i+1)==pageId) {
						optionTag += '<option value='+(i+1)+' selected>'+(i+1)+ '/'+ totalPage + '</option>';
					} else {
						optionTag += '<option value='+(i+1)+'>'+(i+1)+ '/'+ totalPage + '</option>';
					}
					
				}
				$("select").html(optionTag);
				goTop();

				$(".prev-page").unbind("click").bind("click",function(){

					if(pageId <= 1) {
						alert("当前界面已经是第一页了");
					} else {
						pageId = parseInt(pageId) - 1;
						getProductList(categoryId,pageId);
					}
					
					return false;
				});

				$(".next-page").unbind("click").bind("click",function(){
					if(pageId >= totalPage) {
						alert("当前界面已经是最后一页了");
					} else {  
						pageId = parseInt(pageId) + 1;
						getProductList(categoryId,pageId);
					}
					
					return false;
				});

				$("select").unbind("change").bind("change",function(){
					//console.log("onchange");
					//在这个时机中，去获取我们所选中的那个页码的数据
					//select的value就是我们所选中的那个option中的value值
					pageId = $(this).val();
					getProductList(categoryId,pageId);
				});

			}
		});
	}


});