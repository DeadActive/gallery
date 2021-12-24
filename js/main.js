$('ul.menu-wrapper li a').each(function () {
    $(this)
        .parent()
        .width($(this).width() + 10);
});

$('ul li a.dropdown-toggle').each(function () {
    $(this)
        .parent()
        .width($(this).width() + 8);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains('submenu')) {
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                if (nextEl.style.display == 'block') {
                    nextEl.style.display = 'none';
                } else {
                    nextEl.style.display = 'block';
                }
            }
        });
    });
});

$(document).ready(function () {
    $('.products-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                },
            },
        ],
    });
    $('.formats-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                },
            },
        ],
    });

    $('.tech-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                },
            },
        ],
    });
    $('.cases-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.news-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    });

    $('.partners-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
