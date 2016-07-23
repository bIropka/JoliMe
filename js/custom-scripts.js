$(document).ready(function () {

    /*** initial **/

    $('.product-counter .current-value').html($('.product-counter input').val());

    var searchObj = $('#form-search');
    var topMenuObj = $('.header-top .top-menu');
    var mainMenuObj = $('nav ul');
    var basketObj = $('.basket-block');

    /**end of initial block **/

    /** scripts for adaptive **/

    if ($(window).width() < '981'){
        searchObj.prependTo('.header .mobile-menu');
        topMenuObj.insertAfter('.top-menu-title');
        mainMenuObj.insertAfter('.main-menu-title');
        topMenuObj.css('display', 'none');
        $('.top-menu-title').removeClass('active');
        basketObj.insertAfter('.sign-mobile');
    } else {
        searchObj.insertBefore('#form-locals');
        topMenuObj.prependTo('.header-top');
        mainMenuObj.prependTo('.header-nav .block-content');
        topMenuObj.css('display', 'block');
        mainMenuObj.css('display', 'block');
        basketObj.insertAfter('.sign-block');
    }

    $(window).resize(function(){
        if ($(window).width() < '981'){
            searchObj.prependTo('.header .mobile-menu');
            topMenuObj.insertAfter('.top-menu-title');
            mainMenuObj.insertAfter('.main-menu-title');
            topMenuObj.css('display', 'none');
            $('.top-menu-title').removeClass('active');
            basketObj.insertAfter('.sign-mobile');
            $('.form-basket-order').slideUp();
            $('.basket-visible').removeClass('mobile-hover');
        } else {
            searchObj.insertBefore('#form-locals');
            topMenuObj.prependTo('.header-top');
            mainMenuObj.prependTo('.header-nav .block-content');
            topMenuObj.css('display', 'block');
            mainMenuObj.css('display', 'block');
            basketObj.insertAfter('.sign-block');
            $('.form-basket-order').slideUp();
        }
    });

    /** end of scripts for adaptive **/


    $('.show-search').click(function() {

        $('#search-field').toggleClass('active');
        $('#search-field').focus();

    });

    $('.current-local').click(function() {

        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('active');

    });

    $('#form-locals .radio-locals').on('change', function() {

        var newText = $(this).siblings('label').find('.text').html();
        var newClass = $(this).siblings('label').find('.flag').attr("class");

        $('.current-local .text').html(newText);
        $('.current-local .flag').removeClass().addClass(newClass);

    });

    $('.product-counter .control').click(function() {

        var inputValue = parseInt($(this).siblings('label').find('input').val());
        var costValue  = parseInt($(this).parents('.product').find('.cost-value').html());

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

    $('.mobile-menu .burger').click(function() {

        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');

    });

    basketObj.hover(
        function() {
            if ($(window).width() > '980'){
                $(this).addClass('desktop-hover');
                $(this).find('.form-basket-order').stop().slideDown();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).removeClass('desktop-hover');
                $(this).find('.form-basket-order').stop().slideUp(200);
            }
        }
    );

    $('.basket-visible').click(function() {
        if ($(window).width() < '981'){
            $('.form-basket-order').stop().slideToggle();
            $(this).toggleClass('mobile-hover');
        }
    });

    $(function($) {
        $('#form-mailing').validatr({
            showall: true
        });
    });

    $('input[type="submit"]').click(function() {
        $(this).parent().find('.form-field:invalid').addClass('invalid-field');
        $(this).parent().find('.form-field:valid').addClass('valid-field');
    });

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

});
