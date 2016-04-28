/**
 * Created by jekyll on 22.04.16.
 */


$(document).ready(function () {
    var formMessage = $('.formMessage');
    formMessage.hide();

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

});
