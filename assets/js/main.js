/*-----------------------------------------------------------
* Template Name    : echo - Fully Responsive Personal Template
* Author           : Toonalite
* Version          : 1.0.0
* Created          : March 2022
* File Description : Main JQuery file of the template
*------------------------------------------------------------*/

/******************
    Js Arrangement
 1- Active Menu
 2- Smooth Scroll
 3- Mobile Menu
 4- Typed Text
 5- Skill Bar
 6- Portfolio Slider
 7- Review Slider
 8- Client Slider
 9- Color Option
 10- Return to top
 11- Preloader
 12- send email
*******************/

$(document).ready(function(){
    'use strict';
    $(window).on('load', function () {
        setTimeout(preloaderHide, 1000);
    }) 
    
    returnToTop();
    themeOption();
    activeMenu();
    mobileMenu();
    sideMenu();
    typedTxt();
    portfolioSlider();
    reviewSlider();
    clientSlider();
    validateEmail();
    sendEmail();
    wowEffect();

    $(window).scroll(function (){
        smoothScroll();
        skillBar();
    })


    

});

/***********************
    ACTIVE MENU
 ***********************/
let activeMenu = () => {
    'use strict';

    $('#main-menu ul li a').on('click', function (){
        $('#main-menu ul li a').removeClass('active');
        $(this).addClass('active');
    })
}
/***********************
     SMOOTH SCROLL
 ***********************/
let smoothScroll = () => {
    "use strict";

    $('#main-menu').find('a').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let $anchor = $(target).offset();
        $('body, html ').stop().animate({
            scrollTop: $anchor.top - 70
        }, 1000 );
    });
}

/***********************
     MOBILE MENU
 ***********************/
let mobileMenu = () => {
    "use strict";
    
    $('.mobile-menu').click(function(){
        $(this).toggleClass('hidden');
        $('nav').toggleClass("openm");
    })
    $(document).click(function () {
        if ($("#main-menu").hasClass('show')) {
            $("#main-menu").toggleClass('show');
            $('.mobile-menu').toggleClass('hidden');
            $('nav').toggleClass("openm");
        }
    });
}

/************************
     Sidebar Menu
 ***********************/

let sideMenu = () => {
    "use strict";

    $('.side-menu-btn').click(function (event){
        event.stopPropagation();
        $('#side-menu').toggle('slide');
        $('body').toggleClass("openm");
    })
    
   $(window, '.close-btn').click(function () {
        if ($("#side-menu").is(":visible")) {
            $("#side-menu").toggle('slide');
            $('body').toggleClass("openm");
        }
    });
    
}


/***********************
     TYPED TEXT
 ***********************/
let typedTxt = () => {
    'use strict';
    let typed = $('#typed');
    if (typed.length > 0) {
        new Typed('#typed', {
            stringsElement: '#typed-content',
            backSpeed: 40,
            typeSpeed: 70,
            // smartBackspace: false,
            backDelay: 800,
            fadeOutDelay: 700,
            loop: true,
            cursorChar: '_',
        });
    }
}

/***********************
     SKILL BAR
 ***********************/
let skillBar = () => {
    'use strict';
    if($(document).scrollTop() >= $('#about').offset().top){
        $('.skill-chart').each(function(){
            $(this).animate({
                width:$(this).attr('data-percent')}, 1);
        });
    }
}
/***********************
     PORTFOLIO SLIDER
 ***********************/
let portfolioSlider = () => {
    'use strict';
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1500,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'i',
        },
    });
}

/***********************
     REVIEW SLIDER
 ***********************/
let reviewSlider = () => {
    'use strict';
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 1500,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },

        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'i',
        },
    });
}

/***********************
      CLIENT SLIDER
 ***********************/
let clientSlider = () => {
    'use strict';
    const swiper = new Swiper('.client-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 100,
        },
        freeMode:{
          enabled: true,
            sticky: true,
        },
        slidesPerView: 2,
        spaceBetween: 24,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },

        },
    });
}

/***********************
     COLOR THEME
 ***********************/
let themeOption = () => {
    "use strict";

    $(".switch-dark i").click(function() {
        $("body, html").toggleClass('dark');
        if ($('body').hasClass('dark')){
            $('.switch-dark i.bi-moon-fill').css('display','none');
            $('.switch-dark i.bi-brightness-low-fill').css('display','block');
        }else{
            $('.switch-dark i.bi-moon-fill').css('display','block');
            $('.switch-dark i.bi-brightness-low-fill').css('display','none');
        }
    });
    // let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // if (dark) {
    //     $('.switch-dark i.bi-moon-fill').css('display','none');
    //     $('.switch-dark i.bi-brightness-low-fill').css('display','block');
    // } else {
    //     $('.switch-dark i.bi-moon-fill').css('display','block');
    //     $('.switch-dark i.bi-brightness-low-fill').css('display','none');
    // }

    $(window).click(function () {
        if ($(".color-pallet").hasClass('show')) {
            $(".color-pallet").removeClass('show');
        }
    });

    $('.color-scheme li .dark-scheme').on('click', function() {
        $("body, html").addClass('dark');
        $('.switch-dark i.bi-moon-fill').css('display','none');
        $('.switch-dark i.bi-brightness-low-fill').css('display','block');
        $('.color-scheme li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.color-scheme li .light-scheme').on('click', function() {
        $("body, html").removeClass('dark');
        $('.switch-dark i.bi-moon-fill').css('display','block');
        $('.switch-dark i.bi-brightness-low-fill').css('display','none');
        $('.color-scheme li a').removeClass('active');
        $(this).addClass('active');
    });
    $("ul.pattern .color1").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/d31d4d.css"), !1
    });
    $("ul.pattern .color2").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/1ab394.css"), !1
    });
    $("ul.pattern .color3").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/dba423.css"), !1
    });
    $("ul.pattern .color4").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/774898.css"), !1
    });
    $("ul.pattern .color5").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/fc8210.css"), !1
    });
    $("ul.pattern .color6").on('click', function() {
        return $("#option-color").attr("href", "assets/css/color/007892.css"), !1
    });
    $("#color-switcher .pallet-button").on('click', function() {
        return $("#color-switcher .color-pallet").toggleClass('show'), !1
    })
}


/***********************
     Return To Top
 ***********************/
let returnToTop = () => {
    const progressPath = document.querySelector('.progress-wrap rect');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    const updateProgress = function () {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    const offset = 50;
    const duration = 550;
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });
    $('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
}



/***********************
     Pre Loader
 ***********************/
 
 let preloaderHide = () => {

    $( "#preloader" ).fadeOut(500, function() {
      $( "#preloader" ).hide(); //makes page more lightweight 
  });
 }
 
 
 
 let wowEffect = () => {
     if($('.wow').length > 0){
          new WOW().init();
     }
 }
 
 /***********************
     Send Email
 ***********************/
 let validateEmail = (email) => {
    "use strict";

    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
let sendEmail = () => {

    "use strict";

    let name     = $('#name').val();
    let email    = $('#email').val();
    let subject  = $('#subject').val();
    let comments = $('#comment').val();

    if(!name){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Name is required');
    } else if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is required');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is not valid');
    } else if(!subject){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Subject is required');
    } else if(!comments){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Comments is required');
    } else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url:  "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                let myObj = JSON.parse(data);
                if(myObj['status']=='Congratulation'){
                    $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Error'){
                    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Warning'){
                    $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Submit');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, Please try again.');
            },
        });
    }
}
 