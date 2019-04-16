$(document).ready(function() {
    var e = $(window),
        t = $("body"),
        r = {
            Mobile: !1,
            Desktop: !1,
            Tablet: !1
        },
        a = {
            Scroll: 0,
            WinWidth: 0
        };

    function n() {
        a.WinWidth = e.width(), r.Desktop = a.WinWidth > 1200, r.SmallDesktop = a.WinWidth <= 1200 && a.WinWidth >= 1025, r.Tablet = a.WinWidth <= 1024 && a.WinWidth >= 768, r.Mobile = a.WinWidth <= 767
    } - 1 != navigator.userAgent.indexOf("Mac OS X") && t.addClass("browser-mac"), $(".site-banner .main-navigation, .site-banner .lang-switcher, .site-banner .quicklinks, .site-banner .global-search-form").wrapAll('<div class="header-content">'), $(".site-banner .lang-switcher, .site-banner .quicklinks, .site-banner .global-search-form").wrapAll('<div class="header-inner">'), $(".site-banner .inside").append('<div class="date-mobile"><strong>' + $(".date-aside strong").html() + "</strong></div>"), $(".site-banner .inside").append('<a href="#" class="btn-menu"><span></span></a>'), $(".edito-gauche, .edito-droite").wrapAll('<div class="edito-wrapper">'), $(".testimonial, .pub").wrapAll('<div class="testimonial-wrapper">'), $(".lp-exposant .edito-contact, .lp-exposant .block-image").wrapAll('<div class="contact-wrapper">'), $(".article .article-title img").wrap('<div class="image-wrapper">'), $(".gla-item img").each(function() {
            $(this).wrap('<div class="image-wrapper">')
        }), $(".article_list .la-item img").each(function() {
            $(this).wrap('<div class="image-wrapper">')
        }), $(".mn-item-lvl-1:not(.mn-menu-item-avecpicto)").on("mouseover", function() {
            $(this).closest(".main-navigation").addClass("hover")
        }).on("mouseout", function() {
            $(this).closest(".main-navigation").removeClass("hover")
        }), $(".testimonial .af-title").attr({
            "data-top": "transform: translateY(25px)",
            "data-bottom-top": "transform: translateY(-25px)"
        }), $("body").addClass("ready"),
        function(e) {
            for (i = 0; i < e.length; i++) $(e[i]).attr("data-aos", "fade-in")
        }(["main .date-aside", ".site-banner", ".section-intro", ".edito-gauche", ".edito-droite", ".actus", ".testimonial", ".pub", ".slider-offre", ".conference", ".block-testimonials", ".slider-business", ".partner", ".twitter", ".newsletter-form", ".edito-exposants", ".devenir-exposant", ".focus-business", ".promocom", ".contact-wrapper", ".focus-faq", ".article_list .list-articles", ".article_list .gla-item", ".article_list .la-item", ".article .article-wrapper", ".breadcrumb-nav", ".article .cl-item", ".faq"]), $(".edito-exposants img").attr({
            "data-top": "transform: translateY(0)",
            "data-bottom-top": "transform: translateY(-55px)"
        }), $(".edito-exposants figcaption").attr({
            "data-top": "transform: translateY(25px)",
            "data-bottom-top": "transform: translateY(-150px)"
        }), $(".image:first-child .image__inner").attr({
            "data-top": "transform: translateY(0)",
            "data-bottom-top": "transform: translateY(-30px)"
        }), $(".image:first-child .image__band").attr({
            "data-top": "transform: translateY(25px)",
            "data-bottom-top": "transform: translateY(-150px)"
        }), $(".image:nth-child(2) .image__inner").attr({
            "data-top": "transform: translateY(0)",
            "data-bottom-top": "transform: translateY(-150px)"
        }), $(".image:nth-child(2) .image__band").attr({
            "data-top": "transform: translateY(25px)",
            "data-bottom-top": "transform: translateY(-150px)"
        }), $(".block.twitter").length && twitterFetcher.fetch({
            profile: {
                screenName: "prwofficial"
            },
            domId: "tweets1",
            maxTweets: 6,
            enableLinks: !0,
            showUser: !0,
            showTime: !1,
            showImages: !1,
            lang: "en"
        }), n(), $(".btn-menu").click(function(e) {
            e.preventDefault(), t.toggleClass("show-nav-main")
        }), $(".site-banner .gsf-trigger").click(function() {
            t.addClass("show-search")
        }), t.on("click touchstart", function(e) {
            var i = $(e.target);
            i.parents(".js .site-banner .gsf-fields").length || t.removeClass("show-search")
        }), $("img.svg").each(function() {
            var e = $(this),
                i = e.attr("id"),
                t = e.attr("class"),
                r = e.attr("src");
            $.get(r, function(r) {
                var a = $(r).find("svg");
                void 0 !== i && (a = a.attr("id", i)), void 0 !== t && (a = a.attr("class", t + " replaced-svg")), a = a.removeAttr("xmlns:a"), e.replaceWith(a)
            }, "xml")
        }), $(".main-navigation .mn-item-lvl-1.mn-item-has-submenu").each(function() {
            $(this).prepend('<i class="menu-arrow"></i>')
        }), $(".main-navigation .mn-item-lvl-2.mn-item-has-submenu").each(function() {
            $(this).prepend('<i class="submenu-arrow"></i>')
        }), $(".main-navigation .menu-arrow").on("touchstart", function() {
            if (r.Mobile || r.Tablet) {
                var e = $(this);
                $(".main-navigation .menu-arrow.is-open").removeClass("is-open"), e.parent().toggleClass("is-open"), e.closest(".main-navigation").toggleClass("hover")
            }
        }), $(".image").each(function() {
            var e = $(this).find(".image__inner"),
                i = e.data("image-desktop"),
                t = e.data("image-mobile");
            r.Mobile ? e.css("background-image", "url(" + t + ")") : e.css("background-image", "url(" + i + ")")
        }), e.on("load", function() {
            var i;
            $(".nf-main-content .nf-form-txt").each(function() {
                    var e = $(this),
                        i = e.closest(".nf-main-content");
                    e.on("blur", function() {
                        0 == e.val() ? i.removeClass("hide-label") : e.addClass("hide-label")
                    }).on("input", function() {
                        i.addClass("hide-label")
                    })
                }), $(".nf-form-item .optin-container .nf-form-input").click(function() {
                    var e = $(this),
                        i = e.find("input");
                    i.is(":checked") ? (e.find("input").prop("checked", !1), e.parent().removeClass("checked")) : (e.find("input").prop("checked", !0), e.parent().addClass("checked"))
                }), $(".cxp-swiper").each(function() {
                    var e = $(this),
                        i = e.wrap("<div>").parent().html();
                    e.parent().append(i), e.remove()
                }), $(".cxp-swiper").each(function() {
                    var e = $(this);
                    e.parents(".slider-offre").length ? r.Mobile ? e.find(".swiper-wrapper").carouFredSel({
                        onCreate: function() {
                            e.find(".la-item:first-child").addClass("current")
                        },
                        width: "100%",
                        items: 1,
                        circular: !0,
                        infinite: !0,
                        swipe: !0,
                        responsive: !0,
                        scroll: {
                            onAfter: function(e) {
                                $(e.items.old[0]).removeClass("current"), $(e.items.visible[0]).addClass("current")
                            },
                            fx: "fade",
                            items: 1,
                            duration: 600
                        },
                        auto: {
                            items: 1,
                            play: !1,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'), e.find(".slider-arrow-prev")
                        },
                        next: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'), e.find(".slider-arrow-next")
                        }
                    }) : e.find(".swiper-wrapper").carouFredSel({
                        onCreate: function() {
                            e.find(".la-item:first-child").addClass("current")
                        },
                        width: "100%",
                        items: 1,
                        circular: !0,
                        infinite: !0,
                        swipe: !0,
                        direction: "up",
                        scroll: {
                            onAfter: function(e) {
                                $(e.items.old[0]).removeClass("current"), $(e.items.visible[0]).addClass("current")
                            },
                            fx: "fade",
                            items: 1,
                            duration: 600
                        },
                        auto: {
                            items: 1,
                            play: !0,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'), e.find(".slider-arrow-prev")
                        },
                        next: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'), e.find(".slider-arrow-next")
                        }
                    }) : e.parents(".slider-business").length ? r.Mobile ? e.find(".swiper-wrapper").carouFredSel({
                        width: "100%",
                        items: 1,
                        circular: !0,
                        infinite: !0,
                        responsive: !0,
                        swipe: !0,
                        auto: {
                            items: 1,
                            play: !1,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'), e.find(".slider-arrow-prev")
                        },
                        next: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'), e.find(".slider-arrow-next")
                        }
                    }) : e.find(".swiper-wrapper").carouFredSel({
                        width: "100%",
                        items: 2,
                        circular: !0,
                        infinite: !0,
                        responsive: !0,
                        swipe: !0,
                        auto: {
                            items: 2,
                            play: !1,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-prev"><i class="icon icon-short-arrow-left" aria-hidden="true"></i></a>'), e.find(".slider-arrow-prev")
                        },
                        next: function() {
                            return e.append('<a href="#" class="slider-arrow slider-arrow-next"><i class="icon icon-short-arrow-right" aria-hidden="true"></i></a>'), e.find(".slider-arrow-next")
                        }
                    }) : e.parents(".partner").length && (r.Desktop ? e.find(".swiper-wrapper").carouFredSel({
                        width: "100%",
                        items: 4,
                        circular: !0,
                        infinite: !0,
                        responsive: !0,
                        swipe: !0,
                        auto: {
                            items: 4,
                            play: !0,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.find(".slider-btn-prev")
                        },
                        next: function() {
                            return e.find(".slider-btn-next")
                        }
                    }) : r.Tablet && e.find(".swiper-wrapper").carouFredSel({
                        width: "100%",
                        items: 3,
                        circular: !0,
                        infinite: !0,
                        responsive: !0,
                        swipe: !0,
                        auto: {
                            items: 3,
                            play: !0,
                            timeoutDuration: 5e3
                        },
                        prev: function() {
                            return e.find(".slider-btn-prev")
                        },
                        next: function() {
                            return e.find(".slider-btn-next")
                        }
                    }))
                }),
                function() {
                    r.Mobile || $(".slider-twitter ul").each(function() {
                        for (var e = $(this), i = e.find("li"), t = 0; t < i.length; t += 2) i.slice(t, t + 2).wrapAll("<div class='wrap-couples'></div>")
                    });
                    $(".slider-twitter").length && $(".slider-twitter ul").each(function() {
                        r.Mobile ? $(".slider-twitter ul").carouFredSel({
                            width: "100%",
                            circular: !0,
                            infinite: !0,
                            swipe: !0,
                            responsive: !0,
                            items: 1,
                            scroll: {
                                duration: 600,
                                onBefore: function(e) {
                                    e.items.visible.children().css("opacity", 0).delay(200).fadeTo(400, 1), e.items.old.children().fadeTo(400, 0)
                                }
                            },
                            auto: {
                                items: 1,
                                play: !0,
                                duration: 1e3,
                                timeoutDuration: 5e3
                            }
                        }) : $(".slider-twitter ul").carouFredSel({
                            width: "100%",
                            direction: "up",
                            items: 1,
                            scroll: {
                                duration: 600,
                                onBefore: function(e) {
                                    e.items.visible.children().css("opacity", 0).delay(200).fadeTo(400, 1), e.items.old.children().fadeTo(400, 0)
                                }
                            },
                            auto: {
                                items: 1,
                                play: !0,
                                duration: 1e3,
                                timeoutDuration: 5e3
                            }
                        })
                    })
                }(), (i = $(".slider-testimonials")).length && i.find(".slides").caroufredsel({
                    width: "100%",
                    responsive: !0,
                    items: 1,
                    circular: !0,
                    infinite: !0,
                    swipe: !0,
                    auto: {
                        items: 1,
                        play: !1,
                        timeoutDuration: 5e3
                    },
                    prev: function() {
                        return i.find(".slider__arrow--prev")
                    },
                    next: function() {
                        return i.find(".slider__arrow--next")
                    }
                }), $(".mn-item-lvl-1 > .mn-link.is-active").length && $(".main-navigation").addClass("main-navigation--secondary"), r.Desktop && skrollr.init(), AOS.init({
                    offset: e.height() / 4,
                    duration: 800
                })
        }), e.on("resize orientationchange", function() {
            n()
        }), e.on("scroll", function() {
            a.Scroll = e.scrollTop()
        })
});
