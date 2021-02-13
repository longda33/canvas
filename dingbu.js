<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>槑头脑的博客</title>
</head>

<body>
<div id="to_top" title="返回顶部">
  <img src="https://ae01.alicdn.com/kf/U2c563190da014d79ae0d3ea4ccb4ca88V.jpg" width="40" height="40" />
</div>
</body>

<style>
body{margin:0; padding:0}
#to_top{right: 30px; bottom: 30px; position: fixed; cursor: pointer;}
</style>

<script>
window.onscroll = function(){

  var distance = document.documentElement.scrollTop || document.body.scrollTop; //距离页面顶部的距离

  if( distance >= 300 ) { //当距离顶部超过300px时，显示图片
    document.getElementById('to_top').style.display = "";
  } else { //距离顶部小于300px，隐藏图片
    document.getElementById('to_top').style.display = "none";
  }

  var toTop = document.getElementById("to_top"); //获取图片所在的div

  toTop.onclick = function(){ //点击图片时触发的点击事件
    document.documentElement.scrollTop = document.body.scrollTop = 0; //页面移动到顶部
  }
}
</script>
</html>