function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* PointerEvents
 ========================================================*/
;
(function ($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* TouchTouch Gallery
 ========================================================*/
;
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.touch-touch.js');
        $(document).ready(function () {
            o.touchTouch();
        });
    }
})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                smartSpeed: 450,
                loop: true,
                dots: false,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
                responsive: {
                    0: {items: 1},
                    480: {items: 2},
                    768: {items: 3}
                }
            });
        });
    }
})(jQuery);

/* Owl Carousel-1
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel-1');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 10,
                items: 1,
                smartSpeed: 450,
                loop: true,
                dots: false,
                dotsEach: 1,
                nav: false,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 1,
                        stagePadding: 35
                    },
                    768: {
                        items: 1,
                        stagePadding: 90
                    },
                    850: {
                        items: 1,
                        stagePadding: 140
                    },
                    950: {
                        items: 1,
                        stagePadding: 200
                    },
                    1024: {
                        items: 2,
                        stagePadding: 30
                    },
                    1200: {
                        items: 2,
                        stagePadding: 100
                    },
                    1400: {
                        items: 2,
                        stagePadding: 200
                    },
                    1600: {
                        items: 3,
                        stagePadding: 30
                    },
                    1800: {
                        items: 3,
                        stagePadding: 150
                    },
                    2000: {
                        items: 3,
                        stagePadding: 213
                    }
                }
            });
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa-angle-up'
            });
        });
    }
})(jQuery);


/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
})(jQuery);


/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Mailform
 =============================================*/
;
(function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        include('js/mailform/jquery.form.min.js');
        include('js/mailform/jquery.rd-mailform.min.js');

        $(document).ready(function () {
            var o = $('.rd-mailform');

            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Please use letters only!'
                            },
                            '@NumbersOnly': {
                                message: 'Please use numbers only!'
                            },
                            '@NotEmpty': {
                                message: 'Field should not be empty!'
                            },
                            '@Email': {
                                message: 'Enter valid e-mail address!'
                            },
                            '@Phone': {
                                message: 'Enter valid phone number!'
                            },
                            '@Date': {
                                message: 'Use MM/DD/YYYY format!'
                            },
                            '@SelectRequired': {
                                message: 'Please choose an option!'
                            }
                        }
                    }
                }, {
                    'MF000': 'Sent',
                    'MF001': 'Recipients are not set!',
                    'MF002': 'Form will not work locally!',
                    'MF003': 'Please, define email field in your form!',
                    'MF004': 'Please, define type of your form!',
                    'MF254': 'Something went wrong with PHPMailer!',
                    'MF255': 'There was an error submitting the form!'
                });
            }
        });
    }
})(jQuery);

/* Scroll To
 =============================================*/
$(document).ready(function () {
    $('.nav__item-link').on('click', function (e) {
        e.preventDefault();
        showSection($(this).attr('href'), true);
    });

    if( window.location.hash != '')
        showSection(window.location.hash, false);

}); // - > ready_end;

$(window).load(function () {
    $(window).scroll(function () {
        checkSection();
    }); // - > scroll_end
});

function showSection(section, isAnimate) {

    var
        direction = section.replace(/#/, ''),
        reqSection = $('.section-scroll').filter('[data-section="' + direction + '"]'),
        reqSectionPos = reqSection.offset().top;


    if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
    } else {
        $('body, html').scrollTop(reqSectionPos);
    }
}

function checkSection() {
    $('.section-scroll').each(function () {
        var
            $this = $(this),
            topEdge = $this.offset().top - 200,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll) {
            var
                currentId = $this.data('section'),
                reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

            reqLink.closest('.nav__item').addClass('active')
                .siblings().removeClass('active');

            window.location.hash = currentId;
        }
    });
}


/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');


/* lightning
 ========================================================*/
var canvas, canvas1, stage, stage1, exportRoot, exportRoot1;
var images, images1;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var manifest = [
        {src: "images/page1_img24.png", id: "page1_img24"}
    ];

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);


    canvas1 = document.getElementById("canvas-2");
    images1 = images1 || {};

    var manifest = [
        {src: "images/page1_img25.png", id: "page1_img25"}
    ];

    var loader1 = new createjs.LoadQueue(false);
    loader1.addEventListener("fileload", handleFileLoad1);
    loader1.addEventListener("complete", handleComplete1);
    loader1.loadManifest(manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleFileLoad1(evt) {
    if (evt.item.type == "image") {
        images1[evt.item.id] = evt.result;
    }
}

function handleComplete() {
    exportRoot = new lib.Untitled4();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete1() {
    exportRoot1 = new lib1.Untitled5();

    stage1 = new createjs.Stage(canvas1);
    stage1.addChild(exportRoot1);
    stage1.update();

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", stage1);
}


$(document).ready(function () {
    init();
});


