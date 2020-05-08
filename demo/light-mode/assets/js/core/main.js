/* ==========================================================================
   main.js
   ========================================================================== */

"use strict";
$.noConflict();
var $ = jQuery;

$(document).ready(function() {
    // Animsition
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1000,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body', 
        loadingClass: 'loading',
        loadingInner: '',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    // Bootstrap
    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });

    $(function() {
        $('[data-toggle="popover"]').popover()
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(function() {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now).toLocaleString());
                }
            });
        });
    });
});

// Sidebar Toggle
$('.menu-toggle').click(function(e) {
    e.preventDefault();
    $('main').toggleClass('sidebar-open');
    $('body').toggleClass('sidebar-open sidebar-closed');
});

$('.offcanvas-toggle').click(function(e) {
    e.preventDefault();
    $('.offcanvas-menu').toggleClass('open');
});



// Mobile Menu
$('#mobileMenuButton').click( function(e) {
   e.preventDefault();
   $('#mobileMenu').slideToggle();
});

// Modal Video Autoplay
function videoAutoplay() {
   var trigger = $("body").find('[data-toggle="modal"]');
   trigger.click(function () {
       var theModal = $(this).data("target"),
           videoSRC = $(this).attr("data-theVideo"),
           videoSRCauto = videoSRC + "?autoplay=1";
       $(theModal + ' iframe').attr('src', videoSRCauto);

       $('body').on('hidden.bs.modal', '.modal', function () {
           $(theModal + ' iframe').attr('src', videoSRC);
       });
   });
}
videoAutoplay();

// Forms
$("input.jsNumeric").numeric();

// Sidebar Menu Active State
$(document).ready(function() {
    var last=$.cookie('activeSidebarGroup');
    if (last!=null) {
        //remove default collapse settings
        $("#sidebarCookie .collapse").removeClass('in');
        //show the last visible group
        $("#"+last).collapse("show");
    }
});

// When one section is open close the others
$('#sidebarCookie').on('show.bs.collapse','.collapse', function() {
    $('#sidebarCookie').find('.collapse.show').collapse('hide');
});


//when a group is shown, save it as the active accordion group
$("#sidebarCookie").bind('shown', function() {
    var active=$("#sidebarCookie .in").attr('id');
    $.cookie('activeSidebarGroup', active)
});

// Remove file
$(".file-man-box .file-close").on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().remove();
});

// Wow.js
new WOW().init();

// Waves.js
Waves.attach('.wave-effect', ['waves-block']);
Waves.init();

