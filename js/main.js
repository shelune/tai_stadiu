$(document).ready(function () {
    $('.descriptions').mouseover(function () {
        $('.project-name').css({
            "opacity" : "1",
            "top" : "50%"
        });
    });
    $('.descriptions').mouseleave(function () {
        $('.description').css("opacity", "0");
        $('.project-name').css("top", "46%");
    });
});
