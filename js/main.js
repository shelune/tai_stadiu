/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {
    /*
    $('.letter').each(function (i, el) {
        setTimeout(function () {
            $(el).animate({
                "top": "-=40"
            });
        }, 400 + (i * 200));
    });
    */

    // Header resized as scrolling
    $(window).scroll(function () {
        var currentY = window.pageYOffset || document.documentElement.scrollTop,
            yLimit = 300,
            target = $('.header');
        if (currentY > yLimit) {
            target.addClass('header-shrink');
        } else {
            target.removeClass('header-shrink');
        }
    });

    // Panel hovering effect (replaced by css animations)
    /*
    $('.letter').mouseenter(function () {
        $('.project-name', this).css({
            "opacity": "1",
            "padding-bottom" : "25px"
        });
        $('.role', this).css({
            "opacity": "1",
            "padding-top" : "38px"
        });
    });
    $('.letter').mouseleave(function () {
        $('.project-name', this).css({
            "opacity": "0",
            "padding-bottom" : "45px"
        });
        $('.role', this).css({
            "opacity": "0",
            "padding-top" : "58px"
        });
    });
    */
});
