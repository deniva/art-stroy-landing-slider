var swiper = new Swiper(".slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".slider2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    zoom: {
        maxRatio: 3,
        minRatio: 1
    },
    // on: {
    //     slideChangeTransitionEnd: function () {
    //         console.log('clicked!')
    //         this.zoom.in();
    //     }
    // },
    thumbs: {
        swiper: swiper,
    },
});