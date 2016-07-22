$(document).ready(function () {

    /*** initial **/
    $('.product-counter .current-value').html($('.product-counter input').val());
    /**en of initial block **/

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

    $(function($) {
        $('#form-mailing').validatr({
            showall: true
        });
    });

    /** scripts for slider **/

    $('.slider').slick({

        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000

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
