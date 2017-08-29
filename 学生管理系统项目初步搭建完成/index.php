 <?php
  header("Content-Type: text/html;charset=utf-8");

 $pathInfoExists = array_key_exists("PATH_INFO",$_SERVER);
  if($pathInfoExists){
  $path_info = $_SERVER['PATH_INFO'];
  }else{
  $path_info="/";
  }

  $path_info = substr($path_info,1);
  $path_infos = explode("/",$path_info);

  if(strlen($path_infos[0]) == 0) {
  $path = "index";
  $filename = "index";
  }
    elseif(count($path_infos) ==2){
    $path = $path_infos[0];
    $filename=$path_infos[1];
    }
    else{
    $path = "index";
    $filename = $path_infos[0];
    }
    include( './views/'.$path.'/'.$filename.'.html');

 ?>