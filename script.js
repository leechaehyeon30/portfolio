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

    // 메인에서 노매뉴얼로 이동 
    $('#nextproject').click(function(e) {
        e.preventDefault();  // 기본 링크 동작 막기
    
        $('.project_nomanual').animate({
            'left': '0%'  // 화면에 보이도록 0% 위치로 이동
        }, 1000);
        $('.project_nomanual').show();
    
        $('.main').animate({
            'left': '-100%'  // 왼쪽으로 슬라이드
        }, 1000, function(){
            $('.main').hide();
        });
    });
    
    $('#backBtn').click(function() {
        $('.project_nomanual').animate({
            'left': '100%'  // 오른쪽으로 100% 이동
        }, 1000, function() {
            $('.project_nomanual').hide();
        });
    
        $('.main').animate({
            'left': '0%'  // 원래 위치로 돌아옴
        }, 1000);
        $('.main').show();

    });
    
    // 노매뉴얼 사이트 이동
    $('#viewSiteBtn').click(function() {
        // 새 탭에서 링크 열기
        window.open("https://leechaehyeon30.github.io/nomanual/", "_blank");
    });



    var scrollInterval; // 스크롤 인터벌 저장 변수
    
    $('#mac_ver').hover(function() {
        // 호버했을 때 자동 스크롤 시작
        var iframe = $('#mac_ver')[0];  // iframe DOM 객체
        var iframeDoc = iframe.contentWindow.document; // iframe 내부 문서

        var scrollAmount = 0; // 스크롤 양
        scrollInterval = setInterval(function() {
            // 스크롤 위치를 설정
            iframeDoc.body.scrollTop = scrollAmount; 
            iframeDoc.documentElement.scrollTop = scrollAmount; // HTML 문서의 스크롤 위치도 변경

            scrollAmount += 10; // 스크롤 양을 조금씩 증가시킴
            if (scrollAmount > iframeDoc.body.scrollHeight - iframe.clientHeight) {
                clearInterval(scrollInterval); // 끝까지 스크롤되면 멈춤
            }
        }, 50); // 50ms마다 스크롤 이동
    }, function() {
        // 마우스가 떠났을 때 자동 스크롤 멈춤
        clearInterval(scrollInterval); // 자동 스크롤을 멈춤

        iframeDoc.body.scrollTop = 0;
        iframeDoc.documentElement.scrollTop = 0;
    });
    
});