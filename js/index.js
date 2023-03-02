$(document).ready(function () {
    

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 1,
        slidesPerView: 3,
        // freeMode: false,
        // watchSlidesProgress: true,
        // autoHeight: false, 
        // centeredSlides: true, 
        loopAdditionalSlides : 1,
        slideToClickedSlide : true, 
        
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        centeredSlides: true,
        // spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: swiper,
            
        },
    });
});