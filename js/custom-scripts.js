$(document).ready(function () {

    /*** initial **/

        /* pre-load backgrounds for slider */
    var slide = $('.slider .slide');
    var image = $('.slider .slide').find('img');

    for (var i = 0; i < slide.length; i++) {
        var imagePath = image[i].getAttribute('src');
        $(slide[i]).css('background-image', 'url("' + imagePath + '")');
    }
    /* end of pre-load backgrounds for slider */

    initCounters();

    function initCounters() {
        var counters = document.getElementsByClassName('product-counter');
        for (var i = 0; i < counters.length; i++) {
            var amount = parseInt($(counters[i]).find('input').val());
            $(counters[i]).find('.current-value').html(amount);
        }
    }

    var searchObj = $('#form-search');
    var topMenuObj = $('.header-top .top-menu');
    var mainMenuObj = $('nav > ul');
    var basketObj = $('.basket-block');
    var subMenuObj = $('.sub-menu-wrap .sub-menu-inner');

    /**end of initial block **/

    /** scripts for adaptive **/

    if ($(window).width() < '981'){
        if ($('.mobile-menu').children('.form-search').length == 0) {
            searchObj.prependTo('.header .mobile-menu');
        }
        topMenuObj.insertAfter('.top-menu-title');
        subMenuObj.appendTo('.mobile-menu');
        subMenuObj.addClass('hidden-scrollbar closed');
        mainMenuObj.insertAfter('.main-menu-title');
        topMenuObj.css('display', 'none');
        $('.top-menu-title').removeClass('active');
        basketObj.insertAfter('.sign-mobile');
        $('.main-panel').addClass('full-width');
    } else {
        searchObj.insertBefore('#form-locals');
        topMenuObj.prependTo('.header-top');
        subMenuObj.prependTo('.sub-menu-wrap .block-content');
        subMenuObj.removeClass('hidden-scrollbar closed');
        mainMenuObj.prependTo('.header-nav > .block-content');
        topMenuObj.css('display', 'block');
        mainMenuObj.css('display', 'block');
        basketObj.insertAfter('.sign-block');
        $('.products').removeClass('in-line');
        $('.main-panel').removeClass('full-width');
    }

    $(window).resize(function(){
        if ($(window).width() < '981'){
            if ($('.mobile-menu').children('.form-search').length == 0) {
                searchObj.prependTo('.header .mobile-menu');
            }
            topMenuObj.insertAfter('.top-menu-title');
            mainMenuObj.insertAfter('.main-menu-title');
            topMenuObj.css('display', 'none');
            subMenuObj.appendTo('.mobile-menu');
            subMenuObj.addClass('hidden-scrollbar closed');
            $('.top-menu-title').removeClass('active');
            basketObj.insertAfter('.sign-mobile');
            $('.form-basket-order').slideUp();
            $('.basket-visible').removeClass('mobile-hover');
            $('.main-panel').addClass('full-width');
        } else {
            searchObj.insertBefore('#form-locals');
            topMenuObj.prependTo('.header-top');
            mainMenuObj.prependTo('.header-nav > .block-content');
            subMenuObj.prependTo('.sub-menu-wrap .block-content');
            subMenuObj.removeClass('hidden-scrollbar closed');
            topMenuObj.css('display', 'block');
            mainMenuObj.css('display', 'block');
            basketObj.insertAfter('.sign-block');
            $('.form-basket-order').slideUp();
            $('.products').removeClass('in-line');
            $('.main-panel').removeClass('full-width');
        }
    });

    /** end of scripts for adaptive **/

    $('.mobile-menu-wrap').click(function(event) {
        if ($(event.target).closest(".mobile-menu").length) return;
        $('.burger').removeClass('active');
        $('.mobile-menu-wrap').removeClass('active');
        $('.mobile-menu-wrap').css('width', '269px');
        event.stopPropagation();
    });

    $('.burger').click(function() {
        $(this).addClass('active');
        $('.mobile-menu-wrap').addClass('active');
        setTimeout(function() {
            $('.mobile-menu-wrap').css('width', '100%');
         }, 1500);

    });

    $('.show-more-items').click(function() {
        $(this).addClass('active');
    });

    $('.special-gifts ul li').click(function() {
            $(this).find('input').prop('checked', true);
    });

    var currentLiIndex;
    $('nav > ul > li').hover(
        function() {
            if ($(window).width() > '980'){
                if ($(this).index() != currentLiIndex) {
                    currentLiIndex = $(this).index();
                    $('.sub-menu-wrap .sub-menu').css('display', 'none');
                }
                $('.sub-menu-wrap .sub-menu-inner .sub-menu').eq(currentLiIndex).css('display', 'block');
            }
        },
        function() {

        }
    );
    $('.header-nav').hover(
        function() {

        },
        function() {
            if ($(window).width() > '980'){
                $('.sub-menu-wrap .sub-menu').fadeOut(0);
            }
        }
    );

    $('.mobile-menu .main-menu li span').click(function() {
        if ($(window).width() < '981'){
            $('.sub-menu-inner .sub-menu').css('display', 'none');
            var index = $(this).parent().index();
            $('.sub-menu-inner .sub-menu').eq(index).css('display', 'block');
            $('.sub-menu-inner').removeClass('closed');
        }
    });

    $('.sub-menu-close').click(function() {
        $('.sub-menu-inner').addClass('closed');
    });

    /** scripts for scrollbar **/

    $('.custom-scrollbar').mCustomScrollbar();

    $('.hidden-scrollbar').mCustomScrollbar();

    /** end of scripts for scrollbar **/


    $('.show-search').click(function() {

        $('#search-field').toggleClass('active');
        $('#search-field').trigger('focus');

    });

    $('.current-local').click(function() {

        $(this).siblings('ul').stop().slideToggle();
        $(this).toggleClass('active');

    });

    $('#form-locals .radio-violet').on('change', function() {

        var newText = $(this).siblings('label').find('.text').html();
        var newClass = $(this).siblings('label').find('.flag').attr("class");

        $('.current-local .text').html(newText);
        $('.current-local .flag').removeClass().addClass(newClass);

        $('#form-locals ul').stop().slideToggle();

    });

    $('.product-counter .control').click(function() {

        var inputValue = parseInt($(this).siblings('label').find('input').val());

        if($(this).hasClass('increment')) {
            inputValue++;
        } else if($(this).hasClass('decrement') && inputValue > 1) {
            inputValue--;
        }

        $(this).siblings('.current-value').html(inputValue);
        $(this).siblings('label').find('input').val(inputValue);

    });

    $('.tab-controls li').click(function() {

        var currentChoice = $(this).index();

        $('.tab-controls .active').removeClass('active');
        $(this).toggleClass('active');

        $('.show-all .active').removeClass('active');
        $('.show-all li').eq(currentChoice).toggleClass('active');

        $('.tab .active').removeClass('active');
        $('.tab li').eq(currentChoice).toggleClass('active');

    });

    $('.mobile-menu-title').click(function() {

        if ($(window).width() < '981'){
            $(this).toggleClass('active');
            $(this).next('ul').slideToggle();
        }

    });

    basketObj.hover(
        function() {
            if ($(window).width() > '980'){
                $(this).addClass('desktop-hover');
                $(this).find('.form-basket-order').stop().fadeIn();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).removeClass('desktop-hover');
                $(this).find('.form-basket-order').stop().fadeOut(200);
            }
        }
    );

    $('.basket-visible').click(function() {
        if ($(window).width() < '981'){
            $('.form-basket-order').stop().fadeToggle();
            $(this).toggleClass('mobile-hover');
        }
    });

    $('.product-more-info .control-panel li').click(function() {

        if(!$(this).hasClass('active')) {
            var currentIndex = $(this).index();
            $('.product-more-info .control-panel .active').removeClass('active');
            $(this).addClass('active');
            $('.product-more-info .more-content-item.active').removeClass('active');
            $('.product-more-info .more-content-item').eq(currentIndex).addClass('active');
        }

    });

    $(function($) {
        $('.checked-form').validatr({
            showall: true
        });
    });

    $('.form-submit').click(function() {
        $(this).parent().find('.form-field:invalid').addClass('invalid-field');
        $(this).parent().find('.form-field:valid').addClass('valid-field');
    });

    /*************************
     Blog page scripts
     ************************/

    $('.slider-blog').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '.slider-blog-control',
        prevArrow: '.slider-blog-left',
        nextArrow: '.slider-blog-right',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*************************
     End of blog page scripts
     ************************/

    /** scripts for slider **/

    $('.slider').slick({

        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    autoplay: false
                }
            }
        ]

    });

    $('.slider-dots li').click(function() {

        $('.slider').slick('slickGoTo', $(this).index());

    });

    $('.slider').on('afterChange', function(event, slick, currentSlide){

        $('.slider-dots .active').toggleClass('active');
        $('.slider-dots li').eq(currentSlide).toggleClass('active');

    });

    $('.slider-dots li').hover(
        function() {
            $('.slider').slick('slickPause');
        },
        function() {
            $('.slider').slick('slickPlay');
        }
    );

    /** end of scripts for slider **/

    /*************************
     Category page scripts
     ************************/

    $('.main-panel-control .current-choice').click(function() {
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle();
    });

    $('.main-panel-control .radio-violet').on('change', function() {

        var newText = $(this).siblings('label').html();

        $(this).parents('.form-pop-up').siblings('.current-choice').html(newText);

        $(this).parents('.form-pop-up').stop().slideToggle();

    });

    $('.sidebar-control').click(function() {

        $('.products').find('.only-full').toggleClass('hidden');
        $('.sidebar').toggleClass('slide-left');
        $('.main-panel').toggleClass('full-width');
        $('.main-panel .sidebar-control').toggleClass('hidden');

    });

    $('.products-layout').click(function() {

        if (!$(this).hasClass('active')) {

            var products = $('.products');

            $('.products-layout').toggleClass('active');
            if ($(this).hasClass('grid-layout')) {
                products.fadeOut(0);
                products.removeClass('in-line');
                products.fadeIn(600);
            } else if ($(this).hasClass('line-layout')) {
                products.fadeOut(0);
                products.addClass('in-line');
                products.fadeIn(600);
            }
        }

    });

    $('.filter .title').click(function() {
        $(this).toggleClass('closed');
        $(this).next('ul').slideToggle();
        $(this).siblings('.show-more').slideToggle();
    });

    $('.filter .show-more').click(function() {
        var fields = $(this).siblings('ul').find('li');
        for (var i = 8; i < fields.length; i++) {
            $(fields[i]).fadeToggle(200);
        }
        $(this).toggleClass('closed');
    });

    /** script for filter-slider **/

    var minPrice = parseInt($('.filter-slider-min').html()), maxPrice = parseInt($('.filter-slider-max').html());
    $("#filter-slider-range").rangeSlider({
        bounds:{min: minPrice, max: maxPrice},
        defaultValues:{min: maxPrice / 3 , max: (maxPrice / 3) * 2},
        step: 1000

    });

    /** end of script for filter-slider **/

    $('.show-filters').click(function() {
        $(this).toggleClass('active');
        $('.category-content .sidebar').slideToggle();
        $("#filter-slider-range").rangeSlider('resize');
    });


    /*************************
     End of category page scripts
     ************************/

});
