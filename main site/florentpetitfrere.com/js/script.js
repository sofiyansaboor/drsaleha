(function (a) {
    a.fn.resizeToParent = function (c) {
        var e = {
            parent: "div"
            , delay: 100
        };
        var c = a.extend(e, c);

        function f(n) {
            n.css({
                width: ""
                , height: ""
                , "margin-left": ""
                , "margin-top": ""
            });
            var k = n.parents(c.parent).width();
            var j = n.parents(c.parent).height();
            var h = n.width();
            var g = n.height();
            var m = h / k;
            if ((g / m) < j) {
                n.css({
                    width: "auto"
                    , height: j
                });
                h = h / (g / j);
                g = j
            }
            else {
                n.css({
                    height: "auto"
                    , width: k
                });
                h = k;
                g = g / m
            }
            var l = (h - k) / -2;
            var i = (g - j) / -2;
            n.css({
                "margin-left": l
                , "margin-top": i
            })
        }
        var d;
        var b = this;
        a(window).on("resize", function () {
            clearTimeout(d);
            d = setTimeout(function () {
                b.each(function () {
                    f(a(this))
                })
            }, c.delay)
        });
        return this.each(function () {
            var g = a(this);
            g.attr("src", g.attr("src"));
            g.load(function () {
                f(g)
            });
            if (this.complete) {
                f(g)
            }
        })
    }
})(jQuery);

function PlugJS() {
     if ($('#scrollable').length > 0) {
        if ($('body').hasClass('testshoot') && ($(window).width() < 768)) {
        } else if ($('body').hasClass('galerie')) {
            $('#sectionwrapper section:first-child').addClass('current');
            var i = 0;
            var f = document.getElementById('scrollable');

            function changeI() {
                i = $(this).attr('data-snapcurrent');
                console.log(i)
            }
            var wrap = $('#sectionwrapper section').length;
            var maxI = wrap - 1;
            var docWidth = $(document).width();
            var wrapWidth = wrap * docWidth;
            $('.prv-push').fadeOut();
            $('#sectionwrapper').css("width", wrapWidth);
            
            $('.nxt').click(function () {
                i++;
                var docWidth = $(document).width();
                var a = -(docWidth * i);

                $('#sectionwrapper').css("left", a);
                console.log(i)
                $('#sectionwrapper section').removeClass('current');
                $('#sectionwrapper').find('[data-snapcurrent="'+ i +'"]').addClass('current');
            });
            $('.prev').click(function () {
                i--;
                var docWidth = $(document).width();
                var a = docWidth;

                $('#sectionwrapper').css("left", "+="+a+"px");
                console.log(i);
                $('#sectionwrapper section').removeClass('current');
                $('#sectionwrapper').find('[data-snapcurrent="'+ i +'"]').addClass('current');
            });
            $('.nxt-push').click(function () {
                if (i < maxI) {
                i++;
                var docWidth = $(document).width();
                var a = -(docWidth * i);
                $('#sectionwrapper').css("left", a);
                if (i == 0) {
                    $('.prv-push').fadeOut()
                }
                else {
                    $('.prv-push').fadeIn()
                }
                    console.log(i)
                }
                $('#sectionwrapper section').removeClass('current');
                $('#sectionwrapper').find('[data-snapcurrent="'+ i +'"]').addClass('current');
            });
            $('.prv-push').click(function () {
                if (i > 0){
                i--;
                    var docWidth = $(document).width();
                var posLeft = $('#sectionwrapper').left;
                var a = posLeft - docWidth;
                $('#sectionwrapper').css("left", a);
                if (i < 1) {
                    $('.prv-push').fadeOut()
                }
                else {
                    $('.prv-push').fadeIn()
                }
                    console.log(i)
                }
                $('#sectionwrapper section').removeClass('current');
                $('#sectionwrapper').find('[data-snapcurrent="'+ i +'"]').addClass('current');
            });

            document.onkeydown = checkKey;
                        
            function checkKey(e) {
                
                
                e = e || window.event;
                if (e.keyCode == '39') {
                   if (i < maxI) {
                    i++;
                    var a = -(docWidth);
                    $('#sectionwrapper').css("left", "+="+a+"px");
                    console.log(i)
                   }
                }
                else if (e.keyCode == '37') {
                    if (i > 0) {
                        i--;
                        var a = docWidth;
                        $('#sectionwrapper').css("left", "+="+a+"px");
                        console.log(i)
                    }
                }
                else if (e.keyCode == '27') {
                    $('.infos').removeClass('ouvre-info');
                    $('.infos-order').removeClass('ouvre-info-order');
                }
            }
        } else {
            var b = $(document).width();
            var c = $(document).height();
            if ($('body').hasClass('galerie')) {
                var d = true
            }
            else {
                var d = false
            }
            var f = new FTScroller(document.getElementById('scrollable'), {
                scrollingY: false, 
                snapping: false, 
                snapSizeX: b, 
                scrollbars: false,
                maxFlingDuration: 200, 
                bouncing: false, 
                scrollingClassName: "onscrolling", 
                flingBezier: "CubicBezier(0.103, 0.389, 0.307, 0.966)", 
                bounceBezier: "CubicBezier(0.19, 1, 0.22, 1)"
            , });
            var i = 0; /*f.scrollLeft = 3000;setTimeout(function(){f.scrollTo(00, 0);},1300);*/
            if (i == 0) {
                $('.prv-push').fadeOut()
            }
            else {
                $('.prv-push').fadeIn()
            }
            $('.snap').hover(function () {
                i = $(this).attr('data-snapcurrent');
                console.log(i)
            });
            if ($('body').hasClass('general')) {
                 setTimeout(function () {
                if(f.scrollLeft == 0) {
                   
                        var a = $(document).width() / 2.5;
                        f.scrollTo(a, 0);
                        setTimeout(function () {
                            f.scrollTo(0, 0);
                        }, 900);
                   
                } }, 5000);
            }
            
            function changeI() {
                i = $(this).attr('data-snapcurrent');
                console.log(i)
            }
            $('.nxt').click(function () {
                i++;
                var a = $(document).width() * i;
                f.scrollTo(a, 0);
                console.log(i)
            });
            $('.prev').click(function () {
                i--;
                var a = $(document).width() * i;
                f.scrollTo(a, 0);
                console.log(i)
            });
            $('.nxt-push').click(function () {
                i++;
                var a = $(document).width() * i;
                f.scrollTo(a, 0);
                if (i == 0) {
                    $('.prv-push').fadeOut()
                }
                else {
                    $('.prv-push').fadeIn()
                }
            });
            $('.prv-push').click(function () {
                i--;
                var a = $(document).width() * i;
                f.scrollTo(a, 0);
                if (i == 0) {
                    $('.prv-push').fadeOut()
                }
                else {
                    $('.prv-push').fadeIn()
                }
            });
            f.addEventListener('scroll', function () {
                a = f.scrollLeft;
                a1 = b;
                a2 = a1 * 2;
                a3 = a1 * 3;
                a4 = a1 * 4;
                a5 = a1 * 5;
                a6 = a1 * 6;
                a7 = a1 * 7;
                a8 = a1 * 8;
                a9 = a1 * 9;
                a10 = a1 * 10;
                a11 = a1 * 11;
                a12 = a1 * 12;
                a13 = a1 * 13;
                a14 = a1 * 14;
                a15 = a1 * 15;
                a16 = a1 * 16;
                a17 = a1 * 17;
                a18 = a1 * 18;
                a19 = a1 * 19;
                a20 = a1 * 20;
                if (a < a1) {
                    i = 0
                }
                else if (a > a1 && a < a2) {
                    i = 1
                }
                else if (a > a2 && a < a3) {
                    i = 2
                }
                else if (a > a3 && a < a4) {
                    i = 3
                }
                else if (a > a4 && a < a5) {
                    i = 4
                }
                else if (a > a5 && a < a6) {
                    i = 5
                }
                else if (a > a6 && a < a7) {
                    i = 6
                }
                else if (a > a7 && a < a8) {
                    i = 7
                }
                else if (a > a8 && a < a9) {
                    i = 8
                }
                else if (a > a9 && a < a10) {
                    i = 9
                }
                else if (a > a10 && a < a11) {
                    i = 10
                }
                else if (a > a11 && a < a12) {
                    i = 11
                }
                else if (a > a12 && a < a13) {
                    i = 12
                }
                else if (a > a13 && a < a14) {
                    i = 13
                }
                else if (a > a14 && a < a15) {
                    i = 14
                }
                else if (a > a15 && a < a16) {
                    i = 15
                }
                else if (a > a16 && a < a17) {
                    i = 16
                }
                else if (a > a17 && a < a18) {
                    i = 17
                }
                else if (a > a18 && a < a19) {
                    i = 18
                }
                else if (a > a19 && a < a20) {
                    i = 19
                }
                else if (a > a20 && a < a21) {
                    i = 20
                }
                console.log(i)
            });
            f.addEventListener('scroll', function () {
                $('.scrollinficator').addClass('hide')
            });
            document.onkeydown = checkKey;

            function checkKey(e) {
                e = e || window.event;
                if (e.keyCode == '39') {
                    i++;
                    var a = $(document).width() * i;
                    f.scrollTo(a, 0);
                    console.log(i)
                }
                else if (e.keyCode == '37') {
                    if (i > 0) {
                        i--;
                        var a = $(document).width() * i;
                        f.scrollTo(a, 0);
                        console.log(i)
                    }
                }
                else if (e.keyCode == '27') {
                    $('.infos').removeClass('ouvre-info');
                    $('.infos-order').removeClass('ouvre-info-order')
                }
            }
        }
    }
    $('#pannel1').hover(function () {
        $('#sectionImg').removeClass().addClass('pannel1-hover');
        $('#pannel1').removeClass('pannel-hover');
        $('#pannel2').addClass('pannel-hover');
        $('#pannel3').addClass('pannel-hover');
        $('#pannel1 .desc').addClass("open");
        $('#pannel2 .desc').removeClass("open");
        $('#pannel3 .desc').removeClass("open")
    });
    $('#pannel2').hover(function () {
        $('#sectionImg').removeClass().addClass('pannel2-hover');
        $('#pannel1').addClass('pannel-hover');
        $('#pannel2').removeClass('pannel-hover');
        $('#pannel3').addClass('pannel-hover');
        $('#pannel1 .desc').removeClass("open");
        $('#pannel2 .desc').addClass("open");
        $('#pannel3 .desc').removeClass("open")
    });
    $('#pannel3').hover(function () {
        $('#sectionImg').removeClass().addClass('pannel3-hover');
        $('#pannel1').addClass('pannel-hover');
        $('#pannel2').addClass('pannel-hover');
        $('#pannel3').removeClass('pannel-hover');
        $('#pannel1 .desc').removeClass("open");
        $('#pannel2 .desc').removeClass("open");
        $('#pannel3 .desc').addClass("open")
    });
    $('#sectionwrapper').mouseleave(function () {
        $('#sectionImg').removeClass();
        $('#pannel1').removeClass('pannel-hover');
        $('#pannel2').removeClass('pannel-hover');
        $('#pannel3').removeClass('pannel-hover');
        $('.desc').removeClass("open")
    });
        setTimeout(function() {
        $('body').addClass('loaded')
    }, 1000);
    $('.img-cover').resizeToParent();
    $(".next-page").on('click', function () {
        var a = $(this).data("href");
        if (a !== undefined) {
            $("body").removeClass('loaded');
            setTimeout(function () {
                window.location.href = a
            }, 1800)
        }
    });
    $('.slider-gal').slick({
        dots: false
        , arrows: true
        , infinite: false
        , slidesToShow: 1
        , autoplay: false
        , fade: true
        , focusOnSelect: true
    });
    $('#info-trigger').click(function () {
        $('.infos').toggleClass('ouvre-info')
    });
    $('#order-print').click(function () {
        $('.infos-order').toggleClass('ouvre-info-order')
    });
    $('#info-order-trigger').click(function () {
        $('.infos-order').toggleClass('ouvre-info-order')
    });
    $('.info-order-container').click(function () {
        $('.infos-order').removeClass('ouvre-info-order')
    });
    $('.info-container').click(function () {
        $('.infos').removeClass('ouvre-info')
    });
    if ($('body').hasClass('homepage')) {
        $('#son_home').trigger('play');
        $('.next-page').click(function () {
            $('#son_home').animate({
                volume: 0
            }, 2000)
        })
    }
    setTimeout(function () {
        $('#son_click').trigger('play')
    }, 500);
    $('.played').click(function () {
        $('#son_home').animate({
            volume: 0
        }, 1000);
        $('.played').fadeOut();
        $('.muted').fadeIn()
    });
    $('.muted').click(function () {
        $('#son_home').animate({
            volume: 1
        }, 1000);
        $('.played').fadeIn();
        $('.muted').fadeOut()
    });
    setInterval(function () {
        $('nav a').addClass('anim-auto');
        setTimeout(function () {
            $('nav a').removeClass('anim-auto')
        }, 1000)
    }, 10000);
    setInterval(function () {
        $('.scrollinficator').addClass('anim-auto');
        setTimeout(function () {
            $('.scrollinficator').removeClass('anim-auto')
        }, 1000);
    }, 4000);
    setTimeout(function() {
        var i = 0;
        var a = $('#caroussel > li').length - 1;
        $("#caroussel > li").eq(i).addClass('active');
        $('#subnav > a').eq(i).addClass('active');
        var b = 4200;
        var c = setInterval(function () {
            slideAutoPlay()
        }, b);

        function slideAutoPlay() {
            if (i < a) {
                i++;
                $('#caroussel > li').removeClass('active').eq(i).addClass('active');
                $('#subnav > a').removeClass('active').eq(i).addClass('active')
            }
            else {
                i = 0;
                $('#caroussel > li').removeClass('active').eq(i).addClass('active');
                $('#subnav > a').removeClass('active').eq(i).addClass('active')
            }
        }
    }, 1000);
} 



$.fn.isInViewport = function () {
    var a = $(this).offset().top;
    var b = a + $(this).outerHeight();
    var c = $(window).scrollTop();
    var d = c + $(window).height();
    return b > c && a < d
};

$(document).ready(function () {
    var b;
    var c;
    var d;
    document.onmousemove = function (e) {
        b = parseInt(e.clientX / 30);
        c = parseInt(e.clientX / 75);
        d = parseInt(e.clientX / 150)
    };
    requestAnimationFrame(animate);

    function animate() {
        if ($('#scrollable').length > 0) {
            var a = document.querySelector('#scrollable').scroll
        }
        TweenMax.to('.x-mouve', 1, {
            x: c
            , y: 0
        });
        TweenMax.to('.x3-mouve', 1, {
            x: b
            , y: 0
        });
        TweenMax.to('.y-mouve', 1, {
            x: -a + 'px'
            , y: 0
        });
        requestAnimationFrame(animate)
    }
});

$(window).load(function() {
   PlugJS();
});

$(window).resize(function() {
    var docWidth = $(document).width();
     $('#sectionwrapper').css("width", wrapWidth);
    var posLeft = $('#sectionwrapper').left;
    var nbreslide = $('#sectionwrapper section').length;
    var wrapWidth = nbreslide * docWidth;
    var tailleslide = wrapWidth / nbreslide;
    
    var i = $('.current').attr('data-snapcurrent');
    var decalage = -(i * tailleslide);
    
   console.log(tailleslide, decalage);
    $('#sectionwrapper').css("left", decalage);
});

$(window).unload(function() {
    PlugJS();
});

<!-- Disable 
function disableselect(e) {
    return false
}

function reEnable() {
    return true
}
//if IE4+ 
document.onselectstart = new Function("return false")
document.oncontextmenu = new Function("return false")
    //if NS6 
if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}
//-->