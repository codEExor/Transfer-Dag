var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    // slidesPerColumn: 1,
    // loop: true,
    // loopedSlides: 3,
    // initialSlide: 2,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {


        320: {
            slidesPerView: 1.5,
            // spaceBetween: 5,

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
            },

        },
        400: {
            slidesPerView: 2.5,
            // spaceBetween: 30,

        },
        800: {
            slidesPerView: 3,
            // spaceBetween: 30,

        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 10,
        },
    }

    //    mousewheel: true,
    //  keyboard: true,
});