
	function init () {
		$(".header-top-login").click(function  () {
			new Login(function (user) {
				$(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
				
			});
		});
		//导航
		new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function (event) {
	    });
		var url = "http://h6.duchengjiu.top/shop/api_goods.php";
		var parm = {cat_id:45};
		$.get(url,parm,function (result) {
		
		    console.log(result.data);
		
		    var container = $("<ul></ul>");
		    result.data.forEach(function (item) {
		        var li = $("<li><h3>"+item.goods_name+"</h3></li>");
		        li.css({
		            float: "left",
		            width: "200px",
		            height: "300px",
		            background: "url("+item.goods_thumb+")"
		        });
		        container.append(li);
		
		        li.click(function () {
		            location.href = "detail.html?goodsID="+item.goods_id;
		        });
		    });
		
		    $(".goodsContainer").append(container);
		});
	}
	init();