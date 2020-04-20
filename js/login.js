/*
 * JavaScript code For Login
 * 
 * @author : VIPArcher
 * @Email : VIPArcher@sina.com
 * @date : 20170527
 *
 *  Copyright 2017 VIPArcher
 */
function msgtemp(msg,className) {
	return `<div class="alert ${className} alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>${msg}</div>`
	/*var $h1 = $('<div class="alert ${className} alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>${msg}</div>');
	return $h1;*/
};
(function($){
	$.fn.extend({
		/* 重置验证码发送按钮 */
		rewire: function (time){
			var $this = $(this);
			var time = time || 60;
			time -= 1;
			if (time == 0) {
				$this.removeAttr("disabled");
				$this.html("获取验证码");
			} else {
				$this.prop("disabled", true);
				$this.html("重新发送（{0}）".format(time));
				setTimeout(function() { $this.rewire(time) }, 1000);
			}
		},
		/*
		 * 验证手机号码
		 * 
		 * @return 0,1,2,3
		 *		0:验证成功; 1:内容为空;  2长度不为11位; 3:格式不对。
		 */
		validatemobile: function (){
			var num = $(this).val();
			if (num.length == 0) {
				$(this)[0].focus();
				return 1;
			} else if (num.length != 11) {
				$(this)[0].focus();
				return 2;
			} else {
				var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				if(!reg.test(num)) {
					$(this)[0].focus();
					return 3;
				} else {
					return 0;
				}
			}
		},
		/*
		 * 验证密码 $phone 被验证的输入框jQ对象
		 * 字母+数字，字母+特殊字符，数字+特殊字符，至少6位
		 * @return 0,1,2,3
		 *		0:验证成功; 1:内容为空; 2:长度过短; 3:格式不对。
		 */
		validatepwd: function (){
			var num = $(this).val();
			if (num.length == 0) {
				$(this)[0].focus();
				return 1
			} else if (num.length < 6) {
				$(this)[0].focus();
				return 2
			} else {
				var  reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
				if(!reg.test(num)) {
					$(this)[0].focus();
					return 3;
				} else {
					return 0;
				}
			}
		},
		//重复确认密码
        validatepwd02:function () {
            var hp_psw = $("#register_pwd").val();
            var hp_psw02 = $("#register_pwd02").val();
            if(hp_psw!=hp_psw02){
            	return 1
			}
        },

        //邀请码验证
        validateinvi:function () {
            var hp_yqm = $("#register_yqm").val();

            if(hp_yqm==""){
                return 1
            }
        },

		//同意条款是否选中
        validateck :function () {
			if($('#register_checkbox').is(':checked')){
				console.log(1)
			}else{
				return 1
			}
        }

	});
})(jQuery);
$(document).ready(function() {
















    // 隐藏/显示密码切换
	$('.pwd-toggle').on('click',function() {
		var icon = $(this).find('.glyphicon');
		if (icon.hasClass('glyphicon-eye-open')) {
			$(this).attr("title", "隐藏密码").siblings('input').prop('type', 'text');
			icon.removeClass('glyphicon-eye-open').addClass('glyphicon-eye-close');
		} else if (icon.hasClass('glyphicon-eye-close')) {
			$(this).attr("title", "显示密码").siblings('input').prop('type', 'password');
			icon.removeClass('glyphicon-eye-close').addClass('glyphicon-eye-open');
		}
	})
	$('#register').click(function() {$('.login').fadeOut(150,function() {$('.register').fadeIn(150)})});
	$('#resetpwd').click(function() {$('.login').fadeOut(150,function() {$('.resetpwd').fadeIn(150)})});
	$('#reglogin').click(function() {$('.register').fadeOut(150,function() {$('.login').fadeIn(150)})});
	$('#pwdlogin').click(function() {$('.resetpwd').fadeOut(150,function() {$('.login').fadeIn(150)})});






});



