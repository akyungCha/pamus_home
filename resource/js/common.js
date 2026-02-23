$(document).ready(function() {
    //pc-gnb
    $(".pc-gnb, .sub-bg").on("mouseenter", function() {
        $(".header").addClass("gnb-open");
    });

    $(".pc-gnb, .sub-bg").on("mouseleave", function() {
        $(".header").removeClass("gnb-open");
    });

    //mo-gnb
    $(".hamburger").click(function() {
        $(".mo-gnb").addClass("on");
        $("body").addClass("scroll-lock");
        $(".mo-dim").addClass("on");
    });

    $(".btn-close, .mo-dim").click(function() {
        $(".mo-gnb").removeClass("on");
        $("body").removeClass("scroll-lock");
        $(".mo-dim").removeClass("on");
    });

    // mo-gnb 서브메뉴
    $(".mo-gnb-list > li > a").on("click", function(e) {
        e.preventDefault();

        const parent = $(this).parent();

        $(".mo-gnb-list > li").not(parent).removeClass("on").find(".sub").slideUp();

        parent.toggleClass("on");
        parent.find(".sub").stop().slideToggle();
    });

    //mo-gnb 화살표
    $(".mo-gnb-list > li").on('click', function() {
        $(this).parent().toggleClass('on');
    });

    // fade 템플릿
    const sections = document.querySelectorAll('.fade');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => observer.observe(section));

    // main > section1
    $(window).on("scroll", function() {
        const winTop = $(window).scrollTop();
        const sectionTop = $(".section1").offset().top - $(window).height() * 0.7;

        if (winTop > sectionTop) {
            $(".section1").addClass("on");
        }
    });

    // main > section3
    $(window).on("scroll", function() {
        const winTop = $(window).scrollTop();
        const winH = $(window).height();

        $(".section3 .content").each(function(i) {
            const offsetTop = $(this).offset().top - winH * 0.7;

            if (winTop > offsetTop && !$(this).hasClass("on")) {
                $(this).addClass("on");
            }
        });
    });

    // main > section4 swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 60,
        loop: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1240: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        },
    });

});
