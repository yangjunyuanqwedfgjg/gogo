

var parm = location.search.replace("?","");
var parms = parm.split("=");
 goodsID = parms[1];
//获取商品的详细信息
var detailContainer = $(".shop-top");
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
$.get(url,{goods_id:goodsID},function (result) {
    // document.write(result.message);
//  console.log(result);

    var info = $("<div><img src='"+result.data[0].goods_thumb+"' alt=''><div><b>"+result.data[0].goods_name+"</b><p>"+result.data[0].price+"</p><h3>"+result.data[0].goods_desc+"</h3></div></div>");
	var addCare = $("<button>立即购买</button>");
    var addCar = $("<button>加入购物车</button>");
   	info.append(addCare);
    info.append(addCar);
    info.click(function () {
//      alert(result.data[0].goods_id);
        var url = "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token");
        var parm = {goods_id:result.data[0].goods_id,number:5};
        $.post(url,parm,function (result) {
            document.write(result.message);
         
        });
    });
    detailContainer.append(info);
});