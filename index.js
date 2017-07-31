function init() {

    $(".header-top-login").click(function () {
        new Login(function (user) {
            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });

    //导航
    new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function (event) {
        console.log(event);
        //empty()  清除子元素
        $(".goods-container").empty();
	new Good (PRODUCT_HOST+GOODS,{cat_id:event.data.id},$(".goods-container"),function (event) {
        console.log(event.data);
        location.href = "detail.html?goodsID="+event.data.goods_id;
    });


    });

	new corouselView.Corouse("#left-course",[{imagePath:"img/hot1.jpg"},{imagePath:"img/hot2.jpg"}],200,338).putSuperView().createControlButton().startTimer(3*1000);
	new corouselView.Corouse("#center-course",[{imagePath:"img/live2.jpg"},{imagePath:"img/live.jpg"}],750,338).putSuperView().createControlButton().startTimer(2*1000);
	
	
	new Good (PRODUCT_HOST+GOODS,null,$(".goods-container"),function (event) {
        console.log(event.data);
		 location.href = "detail.html?goodsID="+event.data.des.goods_id;
    });

}

init();