$(function() {

    var headerElement = $("#header");
    if (headerElement) {
        var headerTag = '';
        headerTag += '<a class="logo" href="m.manmanbug.com">';
        headerTag += '	<img src="images/header_logo.png" alt="">';
        headerTag += '</a>';
        headerTag += '<a class="app" href="#">';
        headerTag += '	<img src="images/header_app.png" alt="">';
        headerTag += '</a>';
        headerElement.append(headerTag);
    }

    var searchElement = $("#search");
    if (searchElement) {
        var searchTag = '';
        searchTag += '<form action="">';
        searchTag += '	<input type="search" placeholder="请输入你想比价的商品" required>';
        searchTag += '	<input type="submit" value="搜索">';
        searchTag += '</form>';
        searchElement.append(searchTag);
    }

    var footerElement = $("#footer");
    if (footerElement) {
        var footerTag = '';
        footerTag += '<div class="row">';
        footerTag += '	<div class="col-xs-4">';
        footerTag += '		<a href="#">登录</a>';
        footerTag += '	</div>';
        footerTag += '	<div class="col-xs-4">';
        footerTag += '		<a href="#">注册</a>';
        footerTag += '	</div>';
        footerTag += '	<div class="col-xs-4">';
        footerTag += '		<a href="javascript:goTop();">返回顶部</a>';
        footerTag += '	</div>';
        footerTag += '</div>';
        footerTag += '<div class="normal-info">';
        footerTag += '	<span class="app-download">手机app下载</span>';
        footerTag += '	<span class="website-des">慢慢买手机版-掌上比价平台</span>';
        footerTag += '</div>';
        footerTag += '<div class="website">m.manmanbuy.com</div>';

        footerElement.append(footerTag);

    }

});

function goTop() {
    var duration = 200; //滑动的时间
    $('body').animate({ scrollTop: 0 }, duration);
}
// 	var obj = {
// 		categoryid:100,
// 		pwd:123
// 	}

// obj[key]
function getUrlParams(key) {
    var paramStr = window.location.href.split("?")[1];
    var paramArray = paramStr.split("&");
    var paramObj = {};
    for (var i = 0; i < paramArray.length; i++) {
        var paramKey = paramArray[i].split("=")[0];
        var paramValue = paramArray[i].split("=")[1];
        paramObj[paramKey] = paramValue;
    }
    return paramObj[key];
}