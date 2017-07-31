


(function() {
	
	function Navwo(obj){
		  var obj = obj||{};
		this.name = obj.goods_name;
		this.thumb=obj.goods_thumb;
		this.number = obj.goods_number;
this.price=obj.goods_price;
		this.sum=this.price*this.number;
			console.log(obj);
	}
	//地址，内容，回调函数
		
	function  Navwo() {}url,parm,superView,callback
Navwo.prototype.createView = function (data) {
		var url = "http://h6.duchengjiu.top/shop/api_cart.php";
	    var parm = {token:localStorage.getItem("token")};
	    $.get(url,parm,function (result) {
	        document.write(result.message);
	        console.log(result.data);
 	 	});
   	 	
   	 	
	var container = $("<div class='navwo'></div>").css({
			width:"100%",
			height:"125px",
			"background-color":"#FB3434"
		})
		superView.append(container);
	}

		
	
	window.Navwo = Navwo;
})()


		