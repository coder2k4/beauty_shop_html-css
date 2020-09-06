$(function () {

    $('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты">'
        },
        offCanvas: {
            position: 'right'
        },
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:start', function () {
        $('.hamburger').removeClass('is-active');
    });

    //    Слайдер услуги
    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 101);

    });
    $('.carousel-services').owlCarousel({
        loop: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    //Функция для автоматического выставление высоты (выравнивание элементов корусели)
    function carouselService() {
        $('.carousel-services-item').each(function () {
            var ths = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);
        });
    }

    //Замена последнего слова в заголовке на <span>слово</span>
    $('.carousel-services-composition .h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
    $('section .h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    //Автоматическое выравнивание при ресайзе сайта.
    function onResize() {
        $('.carousel-services-list').equalHeights();
    }

    onResize();
    window.onresize = function () {
        onResize()
    };


    // $('select').selectize({
    //     create: true,
    // })

    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoHeight: true
    });
//   Обрабатываем форму через AJAX
    $('form.callback').submit(function () {
        var th = $(this)
        $.ajax({
            type: "POST",
            url: "",
            data: th.serialize()
        }).done(function () {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        })
    })
});
