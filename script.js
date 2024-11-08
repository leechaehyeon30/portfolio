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
        $('.project1, .project2, .hidden_num2').css('transform', 'translateX(-3.5vw)');
    });
    $('.project3').mouseleave(function() {
        $('.project1, .project2, .hidden_num2').css('transform', 'translateX(0)');
    });
    $('.project4').mouseenter(function() {
        $('.project1, .project2, .hidden_num2, .project3, .hidden_num3').css('transform', 'translateX(-3.5vw)');
    });
    $('.project4').mouseleave(function() {
        $('.project1, .project2, .hidden_num2, .project3, .hidden_num3').css('transform', 'translateX(0)');
    });

    // .project1에 마우스 올렸을 때 넘버이동
    $('.project1').hover(
        function() {
            $('.hidden_num1').css({
                'left': '11.5%',
                'bottom': '-15.3%',
                'font-size': '25rem',
            });
        },
        function() {
            $('.hidden_num1').css({
                'left': '26%',
                'bottom': '-13.5%',
                'font-size': '22rem'
            });
        }
    );
    // .project2에 마우스 올렸을 때 넘버이동
    $('.project2').hover(
        function() {
            $('.hidden_num2').css({
                'left': '26.5%',
                'bottom': '-15.3%',
                'font-size': '25rem',
            });
        },
        function() {
            $('.hidden_num2').css({
                'left': '45%',
                'bottom': '-13.5%',
                'font-size': '22rem'
            });
        }
    );
    // .project3에 마우스 올렸을 때 넘버이동
    $('.project3').hover(
        function() {
            $('.hidden_num3').css({
                'left': '44.5%',
                'bottom': '-15.3%',
                'font-size': '25rem',
            });
        },
        function() {
            $('.hidden_num3').css({
                'left': '63%',
                'bottom': '-13.5%',
                'font-size': '22rem'
            });
        }
    );
    // .project4에 마우스 올렸을 때 넘버이동
    $('.project4').hover(
        function() {
            $('.hidden_num4').css({
                'left': '62%',
                'bottom': '-15.3%',
                'font-size': '25rem',
            });
        },
        function() {
            $('.hidden_num4').css({
                'left': '81%',
                'bottom': '-13.5%',
                'font-size': '22rem'
            });
        }
    );


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