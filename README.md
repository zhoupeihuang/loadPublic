---
**-----夜空的北斗也没有让她找到迷途的方向-----**
#**loadPublic插件使用方法**

旨在通过ajax的方式，请求公用部分的html 函数等等

loadPublic.js插件

jq扩展包的写法

**引入**

    <!--依赖-->
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
    <!--必须-->
	<script type="text/javascript" src="js/loadPublic.js"></script>

**页面 index.html**

    <h3 onclick="aa(this)" style="border: 1px orangered dashed; width: 800px; height: 90px;">let you go ....</h3>
		<section id="head"></section>
		<section id="main"></section>


**使用**

    $(function() {
		$("#head").loadPublic({
			path: 'template/head.html'
		})
		$("#main").loadPublic({
			path: 'template/main.html'
		})
			})

**子页面head**

    <h3 style="border: 1px red dashed; width: 800px; height: 30px;">I`m HeadPage!</h3>

**子页面main**

	<h3 style="border: 1px red dashed; width: 800px; height: 30px;">I`m Main Page!</h3>  
	      
	<script>	
    function aa(e){
	    console.log(e.innerText)
    }
    </script>


 **页面预览**
 ------
 
