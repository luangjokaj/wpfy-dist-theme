"use strict";var headings=$(".post-inner-content h1, .post-inner-content h2, .post-inner-content h3"),sideHeadings=$(".documentation nav"),current=0;headings.each(function(){current++;var e=$(this).text();$('<a href="#'+current+'"></a>').text(e).appendTo(sideHeadings),$(this).attr("id",current.toString())}),headings.length||$(".documentation nav h6").remove(),(typeof exports!=="undefined"?exports:window).githubStars=function(e,t){function o(e){e instanceof Array||(e=[e]);var t=0;for(var o in e)t+=parseInt(e[o].stargazers_count);return t}var n=new XMLHttpRequest,s=["https://api.github.com"],r="function"==typeof t;if(1===(e=e.split("/")).length?s.push("users",e[0],"repos"):s.push("repos",e[0],e[1]),r&&(n.onreadystatechange=function(){4==n.readyState&&200==n.status&&t(o(JSON.parse(n.responseText)))}),n.open("GET",s.join("/"),r),n.setRequestHeader("Accept","application/vnd.github.v3+json"),n.send(),!r)return o(JSON.parse(n.responseText))};var girdIsotope=$(".grid");$(window).on("load",function(){girdIsotope.length&&girdIsotope.isotope({itemSelector:".grid-item",layoutMode:"masonry"})}),NProgress.start();var interval=setInterval(function(){NProgress.inc()},1e3);$(window).on("load",function(){clearInterval(interval),NProgress.done()}),window.onbeforeunload=function(){console.log("triggered"),NProgress.start()};var header=$(".header"),mockup=$("#mockup"),mockupPosition=100;mockupPosition=mockup.length?mockup.position().top+mockup.height():100,$(window).on("load",function(){$(window).scrollTop(0),setTimeout(function(){header.addClass("reset-delay"),$(".navigation").addClass("reset-delay"),$(".logo").addClass("reset-delay"),$(window).scroll(function(){$(window).scrollTop()>=mockupPosition?(header.addClass("scrolled"),sideHeadings.length&&sideHeadings.addClass("scrolled")):(header.removeClass("scrolled"),sideHeadings.length&&sideHeadings.removeClass("scrolled"))}),mockup.length?header.removeClass("brith"):header.addClass("bright")},2e3),AOS.init(),$(window).resize(function(){AOS.refresh()}),header.addClass("loaded")}),$(window).resize(function(){AOS.refresh}),githubStars("luangjokaj/wordpressify",function(e){$(".github").attr("data-counter",e)}),$("a").click(function(e){if($(this).is('a[href^="#"]')&&$(this).attr("href").length>=2&&!$(this).hasClass("menu-click"))return $("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-100},1e3),!1;if($(this).is('a:not([href^="#"], [href^="mailto"])')&&"_blank"!=$(this).attr("target")){e.preventDefault(),header.removeClass("loaded","bright");var t=this.href;setTimeout(function(){window.location=t},1e3)}});