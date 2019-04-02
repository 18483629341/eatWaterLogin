//前端验证
var postObj = {
	user: "",
	password: "",
	isSave: null
}

$(function () {
	autoFit();
})
window.onresize = function () {
	autoFit();
}
$('body').on('click', '#login', function () {
	var flag = valid();
	if (flag) { //如果flag为true，则发送信息
		console.log('表单验证通过', postObj);
		// $.post('url',{info:postObj},function(data){//！！！！！这里需要后台添加
		//})
	}
})

function valid() { //格式验证，以及获取输入框信息

	/*   获取输入框信息   */
	var user = trim($('input[name="userName"]').val()) || null;
	var password = trim($('input[name="password"]').val()) || null;
	var isSave = $('.CheckBox').hasClass('active');
	var userFlag = true; //表示用户名的前端验证是否通过
	var passFlag = true; //表示密码的前端验证是否通过
	/*   前端  格式验证用户名   */
	if (!user) {
		$('.user').addClass('error');
		$('.user').siblings('.HelpBlock').addClass('error');
		$('.user').siblings('.HelpBlock').html('输入的用户名不能为空哦！');
		userFlag = false;
	} else {
		$('.user').removeClass('error');
		$('.user').siblings('.HelpBlock').removeClass('error');
		userFlag = true;
		postObj.user = user;
	}

	/*   前端验证密码   */
	if (!password) {
		$('.password').addClass('error');
		$('.password').siblings('.HelpBlock').addClass('error');
		$('.password').siblings('.HelpBlock').html('输入的密码不能为空哦！');
		passFlag = false;
	} else {
		$('.password').removeClass('error');
		$('.password').siblings('.HelpBlock').removeClass('error');
		passFlag = true;
		postObj.password = password;
	}
	postObj.isSave = isSave;
	return (userFlag && passFlag);
}
/*  单击仿的单选框 */
$('body').on('click', '.CheckBox', function () {
	$(this).toggleClass('active');
})

/* 当鼠标移入inputP则，去除报错相关样式*/
$('body').on('mouseover', '.InputP', function () {
	$(this).removeClass('error');
	$(this).siblings('.HelpBlock').removeClass('error');
})
/** 去除首尾的空格 **/
function trim(str) {
	return str.replace(/^[' '||' ']*/i, '').replace(/[' '||'  ']$/i, ''); //去除首尾的空格
}
/** 判断是否为邮箱地址 **/

function isEmail(emailStr) {
	var reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,5}$/;
	return reg.test(emailStr);
}
//isEmail('714402934@qq.com')

/** 判断是否为手机 **/

function isPhone(phone) {
	var reg = /^1\d{10}$/;
	return reg.test(phone);
}
//isPhone(18483629341);
var swidth = null;
var W = null;
//header部分里面的所有元素的宽高全自适应方法

function autoFit() {
	swidth = $(window).width();
	if (swidth > 1320 || swidth === 1320) {
		resize();
	}
}

//部分模块等比缩放


function resize() {
	var winratio = $(window).width() / 1920;
	var height = $(window).height();
    if(winratio<1){//只有宽度小于1920的，才需要js做自适应
		$('.HeaderMain').css({
			transform: "scale(" + winratio + ")",
			transformOrigin: "left top"
		});
		$('.LoginContent').css({
		  transform: "scale("+winratio+")",
		  transformOrigin: "right center"
		});
		$('.ThemeBox').css({
			transform: "scale("+winratio+")",
			transformOrigin: "left center"
		});
	}
	// else{
	// 	$('.html1').css({
	// 		transform: "scale(" + winratio + ")",
	// 		transformOrigin: "left top"
	// 	})
	// }
	
	
	
}