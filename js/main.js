/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {
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
});
