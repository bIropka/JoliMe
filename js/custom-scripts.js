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

});
