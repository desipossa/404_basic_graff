$(function () {
    // 문서가 준비되면 일을 시작해라.
    $('.main_visual_slide').slick({
        arrows: false
    });


    $('.main_product_slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true
    });

    $('.MainProduct .arrows .left').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });
    $('.MainProduct .arrows .right').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });


});