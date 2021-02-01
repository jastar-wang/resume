(function ($) {
    "use strict";
    /*--document ready functions--*/
    jQuery(document).ready(function ($) {

        //typed activate
        $('.header-inner h6').typed({
            strings: ["我是一名 Java 开发工程师", "专科毕业于北京外国语大学", "现居帝都朝阳", "至今已工作5年有余", "听前辈说，要做团队里最差的人", "我似懂非懂", "后来我才明白，并一直努力着……"],
            loop: true,
            startDelay: 2000,
            backDelay: 1000,
            typeSpeed: 60,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        });

        /*-- circle progress activate --*/
        CircleProg('.65', '#00B9E4', $('#circle-1'));
        CircleProg('.75', '#DF457E', $('#circle-2'));
        CircleProg('.85', '#2FD4BE', $('#circle-3'));
        CircleProg('.95', '#F28055', $('#circle-4'));


        /*--- function for Circle progreass var activation ---*/
        function CircleProg(val, color, selector) {
            selector.append('<span>' + val.substr(1) + ' % </span>');
            selector.circleProgress({
                value: val,
                size: 150,
                fill: {
                    color: color
                },
                thickness: 10,
                lineCap: 'round',
                emptyFill: "#ddd"
            });
        }

        /*---- portfolio masonay activation with image load  ------*/
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var festivarMasonry = $('.portolio-masonary').isotope({
                layoutMode: 'fitRows',
                itemSelector: '.grid-size'
            });
            $(document).on('click', '.porfolio-menu li', function () {
                var filterValue = $(this).attr('data-filter');
                festivarMasonry.isotope({ filter: filterValue });
            });
        });

        /*---- portfolio menu active  ------*/
        var portfolioMenu = '.porfolio-menu li';
        $(document).on('click', portfolioMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        /* counter section activation  */
        var counternumber = $('.counter-number');
        counternumber.counterUp({
            delay: 20,
            time: 5000
        });

        /*--magnific popup Image Activation--*/
        var imgPopUp = $('.image-popup')
        imgPopUp.magnificPopup({

            gallery: {
                enabled: true
            },
            image: {
                titleSrc: 'title'
            },
            type: 'image'

        });

        /*--testimonial carousel activate--*/
        var testimonial = $('#testimonial-slider');
        testimonial.owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            center: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        /* smoth scroll*/
        $('#main-menu li a').on('click', function (event) {
            event.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: top
            }, 1000);
        });
        /*bottom to top*/
        $(document).on('click', '.go-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        /*--slick Nav Responsive Navbar activation--*/
        var SlicMenu = $('#main-menu');
        SlicMenu.slicknav();
        /*--- scroll spy activate --*/
        new ScrollSpy('#main-menu', {
            nav: '#main-menu > li a',
            className: 'active'
        });
    });

    /*--window Scroll functions--*/
    $(window).on('scroll', function () {
        /*--show and hide scroll to top --*/
        var ScrollTop = $('.go-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.show(1000);
        } else {
            ScrollTop.fadeOut(100);
        }
        /*--sticky menu activation--*/
        var mainMenuTop = $('.nav-area');
        if ($(window).scrollTop() > 300) {
            mainMenuTop.addClass('nav-fixed');
        } else {
            mainMenuTop.removeClass('nav-fixed');
        }
        /*--sticky Mobile menu activation--*/
        var mobileMenuTop = $('.slicknav_menu');
        if ($(window).scrollTop() > 300) {
            mobileMenuTop.addClass('nav-fixed');
        } else {
            mobileMenuTop.removeClass('nav-fixed');
        }


    });

    /*--window load functions--*/
    $(window).on('load', function () {
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

}(jQuery));

/**
 * 查看案例详情
 * @param {Object} dom 节点
 * @param {String} prefix 路径前缀
 */
function showProject(dom, prefix) {
    let title = $(dom).parent(".hover").siblings(".project-title").text();
    let url = "project/" + prefix + ".html";
    layer.open({
        type: 2,
        title: [title, "font-weight:bold"],
        shadeClose: true,
        maxmin: false,
        area: screen() < 2 ? ['90%', '80%'] : ['800px', '500px'],
        content: url
    });
}

/**
 * 判断当前页面大小的类别
 */
function screen() {
    var width = $(window).width();
    if (width > 1200) {
        return 3;   //大屏幕
    } else if (width > 992) {
        return 2;   //中屏幕
    } else if (width > 768) {
        return 1;   //小屏幕
    } else {
        return 0;   //超小屏幕
    }
}