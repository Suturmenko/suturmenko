/**
 * Created by jekyll on 22.04.16.
 */


$(document).ready(function () {
    var formMessage = $('#formMessage'),
        result = $('#result');
            formMessage.hide();
            result.hide();

    $('.mail').click(function () {
        formMessage.slideToggle();
        return false});

    $('.w7').click(function () {
        formMessage.slideUp();});

    $('.scroll').bind("click", function(e){
        var anchor = $(this);
        $('html').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });



    $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        pager: false,
        mode: 'vertical',
        pause: 5000,
        speed: 2000});

    $('.hd').hide();
    $('.html').on('click',function () {$('#html').slideToggle();});
    $('.css').on('click',function () {$('#css').slideToggle();});
    $('.bootstrap').on('click',function () {$('#bootstrap').slideToggle();});
    $('.grid').on('click',function () {$('#grid').slideToggle();});
    $('.js').on('click',function () {$('#js').slideToggle();});
    $('.jq').on('click',function () {$('#jq').slideToggle();});
    $('.sass').on('click',function () {$('#sass').slideToggle();});
    $('.skil').on('click',function () {
        $('#html').slideToggle();
        $('#css').slideToggle();
        $('#bootstrap').slideToggle();
        $('#grid').slideToggle();
        $('#js').slideToggle();
        $('#jq').slideToggle();
        $('#sass').slideToggle();
    });


    $('#mesbut').bind('click',function () {
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize()
        });
        return false;
    });
});
