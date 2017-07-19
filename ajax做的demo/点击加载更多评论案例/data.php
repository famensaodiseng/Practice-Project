<?php
// 数据库连接
$host="localhost";
$db_user="root";
$db_pass="";
$db_name="myajax";
$timezone="Asia/Shanghai";

$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone);
// 获取参数
$last = $_GET['last'];
$amount = $_GET['amount'];
// 查询SQL语句
$start = $last * $amount;
$query=mysql_query("select * from comment order by id desc limit $start,$amount");
$flag = false;
while ($row=mysql_fetch_array($query)) {
	$flag = true;
	$sayList[] = array(
		'id'=>$row['id'],
		'nickname'=>$row['nickname'],
		'content'=>$row['content'],
		'imgpath'=>$row['imgpath'],
		'time'=>$row['time']
      );
}
if($flag){
    echo json_encode($sayList);
}else{
	echo true;
}

?>

