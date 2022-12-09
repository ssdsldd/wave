$(function(){
    $('.blog__silder').slick({
        dots: true,
        arrows: false,
    });

    $('.header__btn, .header__list a').on('click', function(){
        $('.header__btn').toggleClass("header__btn--active");
        $('.header__list').toggleClass("header__list--active");
        $('.header__logo').toggleClass("header__logo--active");
    });

    $('.header__list a').on('click', function(e){
        e.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    let mixer = mixitup('.gallery__photos');
})