

var $ = jQuery.noConflict();
//显示在导航上面的每一个按钮
(function() {
	function NavigaterItem (obj) {
//		工厂模式创建对象
//		var item = {};
//		item.name = obj.cat_name;
//		return item;
		var obj = obj||{};
		this.name = obj.cat_name;
		this.id = obj.cat_id;
		this.item = $("<li>"+this.name+"</li>")
	}
	//click 是NavigaterItem上面的click
	NavigaterItem.prototype.itemClick = function(callback) {
	//	click是this.item调用的 是jQuery对象里面click
		this.item.on("click",this,callback);//callback  形参
		return this;
	};
//	function JQuery () {
//		this.dom = document.querySelector(selector)
//	}
//	JQuery.prototype.on = function(type,parm,fun) {
//		this.dom.addEventListener(type,function(event) {
//			event.data = parm;
//	};
	window.NavigaterItem = NavigaterItem;
//	new NavigaterItem().click(function() {
//		
//	})
	
	function Navigater () {
		
	}
	//点击导航按钮时需要知道点击按钮的商品类型id
	Navigater.prototype.createView = function  (url,superView,callback) {
		$.get(url,function(result) {
			if (result.code==0) {
				result.data.forEach(function(obj) {
					//创建导航列表
					superView.append(new NavigaterItem(obj).itemClick(callback).item);
				});
			}
		});
		return this;
	};
	window.Navigater = Navigater;
})();