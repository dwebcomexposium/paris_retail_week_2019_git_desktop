$(document).ready(function(){var e,t,r=$(window),a=$("body"),n={Mobile:!1,Desktop:!1,Tablet:!1},s={Scroll:0,WinWidth:0};function o(){s.WinWidth=r.width(),n.Desktop=1200<s.WinWidth,n.SmallDesktop=s.WinWidth<=1200&&1025<=s.WinWidth,n.Tablet=s.WinWidth<=1024&&768<=s.WinWidth,n.Mobile=s.WinWidth<=767}-1!=navigator.userAgent.indexOf("Mac OS X")&&a.addClass("browser-mac"),$(".site-banner .main-navigation, .site-banner .lang-switcher, .site-banner .quicklinks, .site-banner .global-search-form").wrapAll('<div class="header-content">'),$(".site-banner .lang-switcher, .site-banner .quicklinks, .site-banner .global-search-form").wrapAll('<div class="header-inner">'),$(".site-banner .inside").append('<div class="date-mobile"><strong>'+$(".date-aside strong").html()+"</strong></div>"),$(".site-banner .inside").append('<a href="#" class="btn-menu"><span></span></a>'),$(".edito-gauche, .edito-droite").wrapAll('<div class="edito-wrapper">'),$(".testimonial, .pub").wrapAll('<div class="testimonial-wrapper">'),$(".lp-exposant .edito-contact, .lp-exposant .block-image").wrapAll('<div class="contact-wrapper">'),$(".article .article-title img").wrap('<div class="image-wrapper">'),$(".gla-item img").each(function(){$(this).wrap('<div class="image-wrapper">')}),$(".article_list .la-item img").each(function(){$(this).wrap('<div class="image-wrapper">')}),$(".mn-item-lvl-1:not(.mn-menu-item-avecpicto)").on("mouseover",function(){$(this).closest(".main-navigation").addClass("hover")}).on("mouseout",function(){$(this).closest(".main-navigation").removeClass("hover")}),$(".testimonial .af-title").attr({"data-top":"transform: translateY(25px)","data-bottom-top":"transform: translateY(-25px)"}),$("body").addClass("ready"),function(e){for(i=0;i<e.length;i++)$(e[i]).attr("data-aos","fade-in")}(["main .date-aside",".site-banner",".section-intro",".edito-gauche",".edito-droite",".actus",".testimonial",".pub",".slider-offre",".conference",".block-testimonials",".slider-business",".partner",".twitter",".newsletter-form",".edito-exposants",".devenir-exposant",".focus-business",".promocom",".contact-wrapper",".focus-faq",".article_list .list-articles",".article_list .gla-item",".article_list .la-item",".article .article-wrapper",".breadcrumb-nav",".article .cl-item",".faq"]),$(".edito-exposants img").attr({"data-top":"transform: translateY(0)","data-bottom-top":"transform: translateY(-55px)"}),$(".edito-exposants figcaption").attr({"data-top":"transform: translateY(25px)","data-bottom-top":"transform: translateY(-150px)"}),$(".image:first-child .image__inner").attr({"data-top":"transform: translateY(0)","data-bottom-top":"transform: translateY(-30px)"}),$(".image:first-child .image__band").attr({"data-top":"transform: translateY(25px)","data-bottom-top":"transform: translateY(-150px)"}),$(".image:nth-child(2) .image__inner").attr({"data-top":"transform: translateY(0)","data-bottom-top":"transform: translateY(-150px)"}),$(".image:nth-child(2) .image__band").attr({"data-top":"transform: translateY(25px)","data-bottom-top":"transform: translateY(-150px)"}),$(".block.twitter").length&&twitterFetcher.fetch({profile:{screenName:"prwofficial"},domId:"tweets1",maxTweets:6,enableLinks:!0,showUser:!0,showTime:!1,showImages:!1,lang:"en"}),o(),$(".btn-menu").click(function(e){e.preventDefault(),a.toggleClass("show-nav-main")}),$(".site-banner .gsf-trigger").click(function(){a.addClass("show-search"),setTimeout(function(){$("#search").trigger("focus")},350)}),a.on("click touchstart",function(e){$(e.target).parents(".js .site-banner .gsf-fields").length||a.removeClass("show-search")}),$("img.svg").each(function(){var t=$(this),r=t.attr("id"),a=t.attr("class"),e=t.attr("src");$.get(e,function(e){var i=$(e).find("svg");void 0!==r&&(i=i.attr("id",r)),void 0!==a&&(i=i.attr("class",a+" replaced-svg")),i=i.removeAttr("xmlns:a"),t.replaceWith(i)},"xml")}),$(".main-navigation .mn-item-lvl-1.mn-item-has-submenu").each(function(){$(this).prepend('<i class="menu-arrow"></i>')}),$(".main-navigation .mn-item-lvl-2.mn-item-has-submenu").each(function(){$(this).prepend('<i class="submenu-arrow"></i>')}),$(".main-navigation .menu-arrow").on("touchstart",function(){var e;(n.Mobile||n.Tablet)&&(e=$(this),$(".main-navigation .menu-arrow.is-open").removeClass("is-open"),e.parent().toggleClass("is-open"),e.closest(".main-navigation").toggleClass("hover"))}),$(".image").each(function(){var e=$(this).find(".image__inner"),i=e.data("image-desktop"),t=e.data("image-mobile");n.Mobile?e.css("background-image","url("+t+")"):e.css("background-image","url("+i+")")}),$(".la-item").each(function(){var e=$(this),i=e.find(".image-wrapper img"),t=e.find(".la-item-content .link-read-more").attr("href");i.wrap('<a href="'+t+'">')}),r.on("load",function(){var e;$(".nf-main-content .nf-form-txt").each(function(){var e=$(this),i=e.closest(".nf-main-content");e.on("blur",function(){0==e.val()?i.removeClass("hide-label"):e.addClass("hide-label")}).on("input",function(){i.addClass("hide-label")})}),$(".nf-form-item .optin-container .nf-form-input").click(function(){var e=$(this),i=e.parent(),t=e.find("input");t.trigger("click"),t.is(":checked")?i.addClass("checked"):i.removeClass("checked")}),a.on("DOMSubtreeModified",".nf-result",function(){$(".nf-result").find("p").length||$('.newsletter-form form input[type="checkbox"]').prop("checked",!1).closest(".optin-container.checked").removeClass("checked")}),$(".cxp-swiper").each(function(){var e=$(this),i=e.wrap("<div>").parent().html();e.parent().append(i),e.remove()}),$(".cxp-swiper").each(function(){var e=$(this);e.parents(".slider-offre").length?n.Mobile?e.find(".swiper-wrapper").carouFredSel({onCreate:function(){e.find(".la-item:first-child").addClass("current")},width:"100%",items:1,circular:!0,infinite:!0,swipe:!0,responsive:!0,scroll:{onAfter:function(e){$(e.items.old[0]).removeClass("current"),$(e.items.visible[0]).addClass("current")},fx:"fade",items:1,duration:600},auto:{items:1,play:!1,timeoutDuration:5e3},prev:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'),e.find(".slider-arrow-prev")},next:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'),e.find(".slider-arrow-next")}}):e.find(".swiper-wrapper").carouFredSel({onCreate:function(){e.find(".la-item:first-child").addClass("current")},width:"100%",items:1,circular:!0,infinite:!0,swipe:!0,direction:"up",scroll:{onAfter:function(e){$(e.items.old[0]).removeClass("current"),$(e.items.visible[0]).addClass("current")},fx:"fade",items:1,duration:600},auto:{items:1,play:!0,timeoutDuration:5e3},prev:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'),e.find(".slider-arrow-prev")},next:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'),e.find(".slider-arrow-next")}}):e.parents(".slider-business").length?n.Mobile?e.find(".swiper-wrapper").carouFredSel({width:"100%",items:1,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:1,play:!1,timeoutDuration:5e3},prev:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'),e.find(".slider-arrow-prev")},next:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'),e.find(".slider-arrow-next")}}):e.find(".swiper-wrapper").carouFredSel({width:"100%",items:2,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:2,play:!1,timeoutDuration:5e3},prev:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'),e.find(".slider-arrow-prev")},next:function(){return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'),e.find(".slider-arrow-next")}}):e.parents(".partner").length&&(n.Desktop?e.find(".swiper-wrapper").carouFredSel({width:"100%",items:4,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:4,play:!0,timeoutDuration:5e3},prev:function(){return e.find(".slider-btn-prev")},next:function(){return e.find(".slider-btn-next")}}):n.Tablet&&e.find(".swiper-wrapper").carouFredSel({width:"100%",items:3,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:3,play:!0,timeoutDuration:5e3},prev:function(){return e.find(".slider-btn-prev")},next:function(){return e.find(".slider-btn-next")}}))}),function(){n.Mobile||$(".slider-twitter ul").each(function(){for(var e=$(this).find("li"),i=0;i<e.length;i+=2)e.slice(i,i+2).wrapAll("<div class='wrap-couples'></div>")});$(".slider-twitter").length&&$(".slider-twitter ul").each(function(){n.Mobile?$(".slider-twitter ul").carouFredSel({width:"100%",circular:!0,infinite:!0,swipe:!0,responsive:!0,items:1,scroll:{duration:600,onBefore:function(e){e.items.visible.children().css("opacity",0).delay(200).fadeTo(400,1),e.items.old.children().fadeTo(400,0)}},auto:{items:1,play:!0,duration:1e3,timeoutDuration:5e3}}):$(".slider-twitter ul").carouFredSel({width:"100%",direction:"up",items:1,scroll:{duration:600,onBefore:function(e){e.items.visible.children().css("opacity",0).delay(200).fadeTo(400,1),e.items.old.children().fadeTo(400,0)}},auto:{items:1,play:!0,duration:1e3,timeoutDuration:5e3}})})}(),(e=$(".slider-testimonials")).length&&e.find(".slides").caroufredsel({width:"100%",responsive:!0,items:1,circular:!0,infinite:!0,swipe:!0,auto:{items:1,play:!1,timeoutDuration:5e3},prev:function(){return e.find(".slider__arrow--prev")},next:function(){return e.find(".slider__arrow--next")}}),$(".mn-item-lvl-1 > .mn-link.is-active").length&&$(".main-navigation").addClass("main-navigation--secondary"),n.Desktop&&skrollr.init(),AOS.init({offset:r.height()/10,duration:800})}),r.on("resize orientationchange",function(){o()}),r.on("scroll",function(){s.Scroll=r.scrollTop()}),e=$(".slider-prw"),t=e.find(".slider-item").clone(),e.html('<div class="slider-hero"><div class="slider__clip"></div>\x3c!-- /.slider__clip --\x3e</div>\x3c!-- /.slider js-slider --\x3e'),e.find(".slider__clip").append(t),e.find(".slider-item").eq(0).addClass("current"),e.find(".la-item-content").append('<div class="slider__nav"><a href="#" class="slider-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.414 12.828"><path d="M1.414 11.414l5-5-5-5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg></a><a href="#" class="slider-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.414 12.828"><path d="M1.414 11.414l5-5-5-5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg></a></div>\x3c!-- /.slider__nav --\x3e'),$(".slider-prw .slider__clip").carouFredSel({responsive:!0,items:1,auto:{play:!0,timeoutDuration:4e5},scroll:{onAfter:function(e){$(e.items.visible).addClass("current").siblings().removeClass("current")},fx:"fade"},prev:".slider-prev",next:".slider-next"})});
