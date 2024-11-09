$(document).ready(function() {
    $('.project1').mouseenter(function() {
        $('.project1').css('transform', 'translateX(0vw)');
    });
    $('.project1').mouseleave(function() {
        $('.project1').css('transform', 'translateX(0)');
    });
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



    // .project1에 마우스를 올렸을 때 요소들 보이게 만들기
    $('.project1').hover(
        function() {
            $('.bg_img .image-container1').stop(true, true).fadeIn(300);
            $('.sec_txt1').stop(true, true).fadeIn(100);
        },
        function() {
            $('.bg_img .image-container1').stop(true, true).fadeOut(300);
            $('.sec_txt1').stop(true, true).fadeOut(100);
        }
    );
    // .project2에 마우스를 올렸을 때 요소들 보이게 만들기
    $('.project2').hover(
        function() {
            $('.bg_img .image-container2').stop(true, true).fadeIn(300);
            $('.sec_txt2').stop(true, true).fadeIn(100);
        },
        function() {
            $('.bg_img .image-container2').stop(true, true).fadeOut(300);
            $('.sec_txt2').stop(true, true).fadeOut(100);
        }
    );
    // .project3에 마우스를 올렸을 때 요소들 보이게 만들기
    $('.project3').hover(
        function() {
            $('.bg_img .image-container3').stop(true, true).fadeIn(300);
            $('.sec_txt3').stop(true, true).fadeIn(100);
        },
        function() {
            $('.bg_img .image-container3').stop(true, true).fadeOut(300);
            $('.sec_txt3').stop(true, true).fadeOut(100);
        }
    );
    // .project4에 마우스를 올렸을 때 요소들 보이게 만들기
    $('.project4').hover(
        function() {
            $('.bg_img .image-container4').stop(true, true).fadeIn(300);
            $('.sec_txt4').stop(true, true).fadeIn(100);
        },
        function() {
            $('.bg_img .image-container4').stop(true, true).fadeOut(300);
            $('.sec_txt4').stop(true, true).fadeOut(100);
        }
    );
});