/**
 * Created by qq on 2017/3/8.
 */

//移动端点击显示，关闭下拉宽效果
$(document).ready(function () {
	$('.menu').on('click',function () {
		$('.sm_nav').toggleClass('show')
	})
	$(".sm_nav li a").on('click',function () {
		$('.sm_nav').toggleClass('show')
	})
})

//鼠标滚轮事件
$(document).ready(function () {
	$(document).on('scroll',function () {
		// alert(1)
		var top=$("#skill").offset().top;
		if ($(document).scrollTop() >= (top)) {
			// 滚动到底部了
			$('.skill .skill_box .art li').eq(0).css({opacity:1}).eq(2).css({opacity:1})
		}
	})
})
// 问问题别犹豫,
//时间线js
$(window).resize(function () {
	w = $(window).width();
	h = $(window).height();
	$('.slides').css({"width": w * 5});
	$('.slide .slides .item').css({"width": w });
	// slide.css({"height": h,"width":w});
	// timeLine.css({left:-w*0.54+232+"px"});
	// alert(1)
})
$(document).ready(function () {
	$(".btn").on('click', function () {
		var w = $(window).width();
		var index = $('.btn').index($(this));
		var wl=w*index;
		$('.slides').css({left: -wl+ "px"})
	})
})
