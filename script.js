$(document).ready(function() {

    $('.project2').mouseenter(function() {
        $('.project1').css('transform', 'translateX(-3.5vw)');
    });
    $('.project2').mouseleave(function() {
        $('.project1').css('transform', 'translateX(0)');
    });
    $('.project3').mouseenter(function() {
        $('.project1, .project2').css('transform', 'translateX(-3.5vw)');
    });
    $('.project3').mouseleave(function() {
        $('.project1, .project2').css('transform', 'translateX(0)');
    });
    $('.project4').mouseenter(function() {
        $('.project1, .project2, .project3').css('transform', 'translateX(-3.5vw)');
    });
    $('.project4').mouseleave(function() {
        $('.project1, .project2, .project3').css('transform', 'translateX(0)');
    });
});