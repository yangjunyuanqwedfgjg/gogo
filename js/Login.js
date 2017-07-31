
//为了防止其他的插件与jQuery重名，可以通过noConflict找到jQuery对象重新更改表示jQuery的符号
var $ = jQuery.noConflict();
(function () {
	function Login(success){
		this.showLogin(success);
	};
		Login.prototype.showLogin = function(success){
			var loginContainer = $("<div class='loginContainer'></div>");
			var closeButton = $("<p>关闭</p>");
			var usernameInput = $("<p><input type='text' placeholder='请输入用户名'</p>");
			var passwordInput = $("<p><input type='password' placeholder='请输入密码'</p>");
			var loginButton = $("<p><button>登录</button></p>")
			
			loginContainer.css({
				width:"400px",
				height:"300px",
				"background-color":"#fb3434",
				border:"5px #5c3b3b solid",
				position:"absolute",
				top:"50%",
				left:"50%",
				"box-sizing":"border-box",
				margin:"-150px -200px"
			});
			
			var inputCSS =({
				padding:"20px 0",
				width:"300px",
				//margin  要给固定宽度
				margin:"0 auto",
				"text-align":"center"
			});
			usernameInput.css(inputCSS);
			passwordInput.css(inputCSS);
			loginButton.css(inputCSS)
			closeButton.css({
				float:"right",
				color:"white",
				padding:"5px"
			});
			closeButton.click(function() {
				loginContainer.slideUp(500,"swing",function() {
					loginContainer.remove();
				});
			});
			loginButton.click(function() {
				$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function (data) {
						console.log(data);
						//登录成功
						if (data.code ==0) {
							localStorage.setItem("token",""+data.data.token);
							loginContainer.slideUp(500,"swing",function() {
								loginContainer.remove();
								//tode  执行外面传入的方法
								success(data.data);
							});
						}else{
							alert(data.message);
						}
					}
				);
			})
			
			loginContainer.append(closeButton);
			loginContainer.append(usernameInput);
			loginContainer.append(passwordInput);
			loginContainer.append(loginButton);
			$(document.body).append(loginContainer);
		};
	
	window.Login = Login;
})();






























