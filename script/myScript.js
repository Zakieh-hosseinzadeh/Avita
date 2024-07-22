const showMenu = document.querySelector('#show-menu')
showMenu.onclick = function () {
    //document.getElementById("box-mother-menu").classList.replace("box-mother-menu-close","box-mother-menu-open")
    document.getElementById("menu-wrapper").classList.add('menu-wrapper-close')
}

const removeMenu = document.querySelector('#remove-menu')
removeMenu.onclick = function () {
    document.getElementById("menu-wrapper").classList.remove("menu-wrapper-close")
}
console.log()

$('#filter a').click(function () {
    // alert('salam')
    let className = $(this).attr('class')

    // console.log(className)
    $('a.active').removeClass('active');
    $(this).addClass('active')

    if (className === 'all') {
        $('.gallery-item').fadeIn(500)
    }else{
        $('.gallery-item').hide().filter('.'+className).fadeIn(500)

    }
    return false;
})

$('#team-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})
$('#customer-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})

AOS.init();
$('#teams-box').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});
