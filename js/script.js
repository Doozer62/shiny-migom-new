$(function() {


    $(".menu").on("click", "a", function(event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1500);

     
    });

    var btn = $('.header__top, .header__top-inner');


    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
        $('.header__top').toggleClass('header__top--active');
    });


});



var menu = ['R 13-15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21-22']
var mySwiper = new Swiper('.swiper-container', {
    
    effect: 'fade',
    scrollbar: {
        direction: 'vertical',
        el: '.swiper-scrollbar',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },

    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});


const swiper = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



$(function() {


    var btn = $('.header, .header__top');


    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });


});


var delay_popup = 5000;

setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);











// renderBullet: function (index, className) {

//     var arr = new Array('R 13-15', 'R 16', 'R 17', 'R 18', 'R 19', 'R 20', 'R 21-22');
//     return '' + (arr[index]) + '';