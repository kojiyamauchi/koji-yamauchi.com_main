jQuery(function ($) {

    // Change's Page. Fade Animation.
    $("ul#menu-social-link-menu a, a.icon-bg, a.close-project, a.album-name-indicator, a.pin-it-btn, a.facebook-share-btn, a.menu-button").addClass("nonmover");
    $('body').fadeMover({
        'effectType': 1,
        'inSpeed': 800,
        'outSpeed': 100,
        'inDelay': '0',
        'outDelay': '0',
        'nofadeOut': 'nonmover'
    });

    // Page Top Button Animation.
    $("#pageTop").click(function (e) {
            $("html,body").animate({
                scrollTop: 0
            }, "slow");
            e.preventDefault();
            return false;
        })
        .on("mouseover", function () {
            $(this).stop(true).fadeTo(500, 0.5, "swing");
            $(this).find("img").stop(true).animate({
                "height": 2.375 + "em",
                "opacity": 1
            }, 1000, "easeInExpo");
            $(this).children("#pageTopRocket").stop(true).animate({
                "top": "-10000px"
            }, 2800, "easeInExpo", function () {
                $(this).find("span.fa-rocket").stop(true).fadeOut(100);
                $(this).find("img").stop(true).animate({
                    "opacity": 0
                }, 100);
            });
        })
        .on("mouseout", function () {
            $(this).stop(true).fadeTo(500, 1, "swing");
            $(this).find("img").stop(true).animate({
                "height": 0
            });
            $(this).children("#pageTopRocket").stop(true).animate({
                "top": "0px"
            }, function () {
                $(this).find("span.fa-rocket").stop(true).fadeIn(1000, "swing");
            });
        });

    // Web Creation Portfolio Page Functions.
    if($('body').hasClass('page-template-webPortfolio')) {
        $("body").css({
            "overflow": "hidden"
        });
        $(window).on("touchmove.noScroll", function (e) {
            e.preventDefault();
        });
        $(window).load(function () {
            setTimeout(function () {
                $("p#signWait").fadeOut(250);
                $("p#signGo").fadeIn(250).children('span.fa-car').addClass('scale');
            }, 2000);
            $("#loadingWrap").delay(3500).fadeOut(1000, "easeOutExpo", function () {
                $("body").css({
                    "overflow": "scroll"
                });
                $(window).off(".noScroll");
            });
        });
        $("#WebSiteCreation img").not('.deskTop').on("mouseover", function () {
            $(this).stop(true).fadeTo(500, 0.6, "swing");
        }).on("mouseout", function () {
            $(this).stop(true).fadeTo(500, 1, "swing");
        });
        $(".unpublishedNoImageWrap a").on("mouseover", function () {
            $(this).children(".unpublished").stop(true).animate({
                "top": 0 + "%"
            }, 2000, "easeOutBounce");
        }).on("mouseout", function () {
            $(this).children(".unpublished").stop(true).animate({
                "top": -100 + "%"
            }, 1500, "swing");
        });
        $("#microBloodScienceIMGWrap a").on("mouseover", function () {
            $(".microBloodScienceIMG1").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".microBloodScienceIMG2").stop(true).fadeTo(2750, 1, "easeOutQuart");
        }).on("mouseout", function () {
            $(".microBloodScienceIMG2").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".microBloodScienceIMG1").stop(true).fadeTo(2750, 1, "easeOutQuart");
        });
        $("#primeMarcheIMGWrap a").on("mouseover", function () {
            $(".primeMarcheIMG1").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".primeMarcheIMG2").stop(true).fadeTo(2750, 1, "easeOutQuart");
        }).on("mouseout", function () {
            $(".primeMarcheIMG2").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".primeMarcheIMG1").stop(true).fadeTo(2750, 1, "easeOutQuart");
        });
        $("#gelatoIncIMGWrap a").on("mouseover", function () {
            $(".gelatoIncIMG1").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".gelatoIncIMG2").stop(true).fadeTo(2750, 1, "easeOutQuart");
        }).on("mouseout", function () {
            $(".gelatoIncIMG2").stop(true).fadeTo(2750, 0, "easeOutQuart");
            $(".gelatoIncIMG1").stop(true).fadeTo(2750, 1, "easeOutQuart");
        });
        $("span#textWait").textillate({
            loop: true,
            in: {
                effect: 'tada'
            },
            out: {
                effect: 'tada'
            }
        });
        $("span#textGo").textillate({ in: {
                effect: 'bounce'
            }
        });
    }

    // About Page Functions. ( Don't Use. )
    /*$("#contactUs").on("mouseover", function () {
        $("div#waitingForContactUs").addClass("scaleAnimation");
    }).on("mouseout", function () {
        $("div#waitingForContactUs").removeClass("scaleAnimation");
    });*/

});
