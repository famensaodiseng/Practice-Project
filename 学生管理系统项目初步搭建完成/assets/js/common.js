/**
 * Created by Administrator on 2017/8/25.
 */
/*杨方涛著作*/
// 第一部分，验证用户是否登录
var php_session_id = $.cookie('PHPSESSID');
if(!php_session_id && location.pathname !='/login'){
    //不存在跳转就跳转到登录页面
   location.pathname = '/login';

}

//页面加载的时候，从cookie去除userinfo,得到头像和用户名
if(location.pathname !='/login'){
var userInfo = $.cookie( 'userInfo' );


var userInfoObj = JSON.parse( userInfo || '{}' );

// 拿到数据后需要更新页面中的用户名与头像
// 准备模板
var format = template('userProfileTplId',userInfoObj);
$( '.aside .profile' ).html( format );

}