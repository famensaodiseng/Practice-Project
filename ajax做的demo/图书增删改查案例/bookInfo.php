<?php
// 数据库连接配置信息
$host="localhost";
$db_user="root";
$db_pass="";
$db_name="myajax";
$timezone="Asia/Shanghai";
// 连接数据库
$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone);
// 获取参数信息，用以区分增删改查操作
$flag = $_POST['flag'];

if($flag == 1){//添加
	$bookName = $_POST['bookName'];
	$bookAuthor = $_POST['bookAuthor'];
	$recommend = $_POST['recommend'];
	$bookDesc = $_POST['bookDesc'];
	$category = $_POST['category'];
	$ids = array();
	for($i=0;$i<count($category);$i++){
		array_push($ids, $category[$i]);
	}
	$str = implode(',',$ids); 
	mysql_query("INSERT INTO bookinfo (book_name, book_author, recommend,book_category,book_desc) 
	VALUES ('".$bookName."', '".$bookAuthor."', ".$recommend.",'".$str."','".$bookDesc."')");
}else if($flag == 2){//删除
	$id= $_POST['id'];
	mysql_query("DELETE FROM bookinfo WHERE id =".$id);
}else if($flag == 3){//根据id查询图书信息
	$id= $_POST['id'];
	$query=mysql_query("select * from bookinfo where id =".$id);
	while ($row=mysql_fetch_array($query)) {
		$book = array(
			'id'=>$row['id'],
			'bookName'=>$row['book_name'],
			'bookAuthor'=>$row['book_author'],
			'recommend'=>$row['recommend'],
			'category'=>$row['book_category'],
			'bookDesc'=>$row['book_desc']
        );
    }
    echo json_encode($book);
	die();
}else if($flag == 4){//更新数据
	$id= $_POST['id'];
	$bookName = $_POST['bookName'];
	$bookAuthor = $_POST['bookAuthor'];
	$recommend = $_POST['recommend'];
	$bookDesc = $_POST['bookDesc'];
	$category = $_POST['category'];
	$ids = array();
	for($i=0;$i<count($category);$i++){
		array_push($ids, $category[$i]);
	}
	$str = implode(',',$ids); 
	mysql_query("UPDATE bookinfo set book_name = '".$bookName."',book_author = '".$bookAuthor."',recommend = ".$recommend.",book_category = '".$str."',book_desc = '".$bookDesc."' where id = ".$id);
}

//列表数据查询
$query=mysql_query("select * from bookinfo order by id desc");
while ($row=mysql_fetch_array($query)) {
	$rec = $row['recommend'];
	if($rec == 1){
		$rec= '是';
	}else if($rec == 2){
		$rec = '否';
	}
    // 分割字符串
	$arr = explode(',',$row['book_category']); 
	$str = '';
	for($i = 0;$i < count($arr);$i++){
	   if($arr[$i] == 1){
	        $str = $str.'计算机 ';
	   }else if($arr[$i] == 2){
	   		$str = $str.'文学 ';
	   }else if($arr[$i] == 3){
	   		$str = $str.'会计';
	   }
	}
	$sayList[] = array(
		'id'=>$row['id'],
		'bookName'=>$row['book_name'],
		'bookAuthor'=>$row['book_author'],
		'recommend'=>$rec,
		'category'=>$str,
		'bookDesc'=>$row['book_desc']
    );
}
echo json_encode($sayList);

