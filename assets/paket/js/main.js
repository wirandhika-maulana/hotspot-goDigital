(function ($) {
	"use strict";


/*===========================================
	=            Windows Load          =
=============================================*/
$(window).on('load', function () {
    preloader();
    wowAnimation();
    aosAnimation();
});


/*===========================================
	=            Preloader          =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};


/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};


/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*===========================================
	=           Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 0);

  });
}


/*=============================================
	=            Header Search            =
=============================================*/
$(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
});
$(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});

/*===========================================
	=          Data Background    =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$("[data-bg-color]").each(function () {
	$(this).css("background-color", $(this).attr("data-bg-color"));
});


/*===========================================
	=      Select2 Active      =
=============================================*/
$("#course-cat").select2({
    tags: true,
    theme: "bootstrap",
    minimumResultsForSearch: -1,
    dropdownCssClass: "course-category-dropdown",
});


/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").addClass("active");
	return false;
});
$(".menu-close, .offCanvas__overly").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").removeClass("active");
});


/*=============================================
	=          Slider active              =
=============================================*/
var swiper2 = new Swiper(".slider__active", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
});



/*=============================================
	=        Categories Active		      =
=============================================*/
var categoriesSwiper = new Swiper('.categories-active', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 44,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 6,
        },
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".categories-button-next",
        prevEl: ".categories-button-prev",
    },
});


/*=============================================
	=        Courses Active		      =
=============================================*/
var coursesSwiper = new Swiper('.courses-swiper-active', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 4,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".courses-button-next",
        prevEl: ".courses-button-prev",
    },
});

/*=============================================
	=        Courses Active		      =
=============================================*/
var coursesSwiperTwo = new Swiper('.courses-swiper-active-two', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".courses-button-next",
        prevEl: ".courses-button-prev",
    },
});


/*=============================================
	=        Courses Active		      =
=============================================*/
var coursesSwiper = new Swiper('.dashboard-courses-active', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1.5,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});

/*=============================================
	=        testimonial Active		      =
=============================================*/
var testimonialSwiper = new Swiper('.testimonial-swiper-active', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});


/*=============================================
	=        testimonial Active		      =
=============================================*/
var testimonialSwiper = new Swiper('.testimonial-swiper-active-two', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});


/*=============================================
	=        testimonial Active		      =
=============================================*/
var testimonialSwiper = new Swiper('.testimonial-active-three', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 1,
        },
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // If we need pagination
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
    },
});


/*=============================================
	=        testimonial Active		      =
=============================================*/
var testimonialSwiper = new Swiper('.testimonial-active-four', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 1,
        },
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // If we need pagination
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
    },
});


/*=============================================
	=        testimonial Active		      =
=============================================*/
var testimonialSwiper = new Swiper('.testimonial-active-five', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});

/*=============================================
	=          instructor active              =
=============================================*/
var instructor = new Swiper(".instructor-nav", {
    spaceBetween: 0,
    slidesPerView: 6,
    navigation: {
        nextEl: ".instructor-button-next",
        prevEl: ".instructor-button-prev",
    },
});
var instructor2 = new Swiper(".instructor-active", {
    spaceBetween: 0,
    thumbs: {
        swiper: instructor,
    },
});


/*=============================================
	=        testimonial Active		      =
=============================================*/
var shopSwiper = new Swiper('.shop-active', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 4,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});


/*=============================================
	=        Brand Active		      =
=============================================*/
var brandSwiper = new Swiper('.brand-swiper-active', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 6,
        },
        '1200': {
            slidesPerView: 6,
        },
        '992': {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
});


/*=============================================
	=        Brand Active		      =
=============================================*/
var brandSwiper = new Swiper('.brand-swiper-active-two', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 5,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
});

/*==================================
        SVG Draw
====================================*/
var $svgIconBox = $('.tg-svg');
$svgIconBox.each(function() {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, {
        duration: 80,
        file: $icon,
    });
    $this.on('mouseenter', function () {
        $vivus.reset().play();
    });
});


/*===========================================
	=         Marquee Active         =
=============================================*/
if ($(".marquee_mode").length) {
    $('.marquee_mode').marquee({
        speed: 20,
        gap: 35,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}


/*===========================================
	=       TweenMax Active   =
=============================================*/
$(".tg-motion-effects").mousemove(function (e) {
    parallaxIt(e, ".tg-motion-effects1", 20);
    parallaxIt(e, ".tg-motion-effects2", 5);
    parallaxIt(e, ".tg-motion-effects3", -10);
    parallaxIt(e, ".tg-motion-effects4", 30);
    parallaxIt(e, ".tg-motion-effects5", -50);
    parallaxIt(e, ".tg-motion-effects6", -20);
    parallaxIt(e, ".tg-motion-effects7", 40);
});
function parallaxIt(e, target_class, movement) {
    var $wrap = $(e.target).parents(".tg-motion-effects");
    if (!$wrap.length) return;
    var $target = $wrap.find(target_class);
    var relX = e.pageX - $wrap.offset().left;
    var relY = e.pageY - $wrap.offset().top;

    TweenMax.to($target, 1, {
      x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
      y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
    });
};



/*===========================================
	=    		 Cart Active  	         =
=============================================*/
$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function () {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find("input").val(newVal);
});

/*=============================================
	=    		player Active  	       =
=============================================*/
const player = new Plyr('#player');

/*===========================================
      =       Odometer Active    =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*===========================================
      =       Coupon Active    =
=============================================*/
$('#coupon-element').on('click', function () {
    $('.coupon__code-form').slideToggle(500);
    return false
})


/*===========================================
	=        Magnific Popup    =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*===========================================
	=        Wow Active      =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


/*===========================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}

/*===========================================
	=    		 Cart Active  	         =
=============================================*/
$(window).on("load", function () {
if ($(".curved-circle").length) {
    $(".curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 280,
        forceHeight: true,
        forceWidth: true,
    });
}
});

})(jQuery);

// NEXT FITURE ///

// document.addEventListener('DOMContentLoaded', function() {
//     const orderbySelect = document.querySelector('.orderby');
//     const packagesContainer = document.querySelector('.courses__grid-wrap');

//     orderbySelect.addEventListener('change', function() {
//         const selectedValue = this.value;
//         const packages = Array.from(packagesContainer.children);

//         packages.sort((a, b) => {
//             const priceA = getPriceValue(a);
//             const priceB = getPriceValue(b);

//             if (selectedValue === 'popularity') { // Tercepat & Termahal
//                 return price - priceA; // Sort descending
//             } else if (selectedValue === 'average rating') { // Termurah
//                 return priceA - priceB; // Sort ascending
//             }
//             return 0; // Default/Popular - keep original order
//         });

//         // Clear and reappend sorted items
//         packagesContainer.innerHTML = '';
//         packages.forEach(pkg => packagesContainer.appendChild(pkg));
//     });

//     // Helper function to extract price value
//     function getPriceValue(packageElement) {
//         const priceText = packageElement.querySelector('.price').textContent;
//         const price = priceText.match(/Rp\s+(\d+(?:,\d+)*)/g)[0]
//             .replace('Rp', '')
//             .replace(/,/g, '')
//             .trim();
//         return parseInt(price);
//     }
// });



// KIRIM PESAN fORM OTOMATIS KE SEMUA PLATFORM ///

function handleSubmit(event) {
    event.preventDefault();
    
    // MENGARAHKAN KE VALUE
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const layanan = document.getElementById('layanan').value;
    const pesan = document.getElementById('pesan').value;

    // FORMAT PESAN KE SEMUA PLATFORM
    const message = `Pesan Baru Form Gangguan dan Berlangganan\n
    Nama: ${nama}\n
    Email: ${email}\n
    WhatsApp: ${whatsapp}\n
    Layanan: ${layanan}\n
    Pesan: ${pesan}`;

    // // WHATSAPP INTEGRATION
    const waMessage = message.replace(/\n/g, '%0a');
    const waURL = `https://api.whatsapp.com/send?phone=6281914933023&text=${waMessage}`;
    window.open(waURL, '_blank');

    // TELEGRAM INTEGRATION
    const TELEGRAM_BOT_TOKEN = '7905324996:AAG5lbAW9pWodw4cWnwhRjdM2uwv_n4cEME';
    const TELEGRAM_CHAT_ID = '-4613194659';
    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    fetch(telegramURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    });

    // EMAIL INTEGRATION
    const formData = new FormData();
    formData.append('Nama:', nama);
    formData.append('Email:', email);
    formData.append('Whatsapp:', whatsapp);
    formData.append('Layanan:', layanan);
    formData.append('Pesan:', pesan);

    fetch('https://formspree.io/f/mqaelkvj', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Pesan berhasil terkirim!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Terjadi kesalahan. Silakan coba lagi.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
}

// document.addEventListener('DOMContentLoaded', function() {
//     const kategoriLabels = document.querySelectorAll('.kategori');
//     const paketItems = document.querySelectorAll('.paket-item');

//     // Initial state - show all items
//     paketItems.forEach(item => item.style.display = 'block');

//     kategoriLabels.forEach(label => {
//         label.addEventListener('click', function(e) {
//             e.preventDefault();
//             const selectedKategori = this.getAttribute('data-id');
//             console.log('Selected category:', selectedKategori);

//             // Remove active class from all labels
//             kategoriLabels.forEach(l => l.classList.remove('active'));
//             // Add active class to clicked label
//             this.classList.add('active');

//             // Filter packages
//             paketItems.forEach(item => {
//                 const itemCategory = item.getAttribute('data-category');
//                 console.log('Item category:', itemCategory);
                
//                 if (selectedKategori === itemCategory) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         });
//     });
// });
