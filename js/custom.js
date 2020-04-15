jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});

{$(".probootstrap-burger-menu-black").on("click",function(o){o.preventDefault(),$("body").hasClass("show")?($(".probootstrap-burger-menu-black").removeClass("active"),$("body").removeClass("show")):($(".probootstrap-burger-menu-black").addClass("active"),$("body").addClass("show"))}),$(window).width()>766?
($("body").removeClass("probootstrap-mobile-menu-active"),$(".probootstrap-burger-menu-black").removeClass("active")):$("body").addClass("probootstrap-mobile-menu-active"),$(window).resize(function(){$(window).width()>766?($("body").removeClass("probootstrap-mobile-menu-active"),$(".probootstrap-burger-menu-black").removeClass("active")):$("body").addClass("probootstrap-mobile-menu-active")}),$(document).click(function(o){var e=$(".probootstrap-nav, .probootstrap-burger-menu-black");e.is(o.target)||0!==e.has(o.target).length||$("body").hasClass("show")&&($("body").removeClass("show"),$(".probootstrap-burger-menu-black").removeClass("active"))})},i=function(){$(".js-probootstrap-search").on("click",function()
