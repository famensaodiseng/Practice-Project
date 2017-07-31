$(function() {

    var productId = getUrlParams("myid");

    var categoryId = "";

    $.ajax({
        url: "http://127.0.0.1:3000/api/getproduct",
        dataType: "json",
        data: { productid: productId },
        success: function(data) {
            var displayName = data.result[0].productName.substring(0, 3);
            var productNameLiTag = '<li class="active">' + displayName + '</li>';
           // $(".breadcrumb").append(productNameLiTag);

            categoryId = data.result[0].categoryId;
            $.ajax({
                url: "http://127.0.0.1:3000/api/getcategorybyid",
                dataType: "json",
                data: { categoryid: categoryId },
                success: function(data) {
                    console.log(data);
					var categoryNameLiTag = '<li><a href="category_product_list.html?categoryid='+categoryId+'">'+data.result[0].category+'</a></li>';
					 $(".breadcrumb").append(categoryNameLiTag);
					 $(".breadcrumb").append(productNameLiTag);


                }
            });

            //console.log(data);
        }
    });


});