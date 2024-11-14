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

    // viewsite버튼 동작
    $('#viewSiteBtn').click(function() {
        window.open("https://leechaehyeon30.github.io/nomanual/", "_blank");
    });
    $('#viewSiteBtn2').click(function() {
        window.open("https://leechaehyeon30.github.io/ikea/", "_blank");
    });


    // 자동스크롤 스크립트
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

            scrollAmount = 10; // 스크롤 양을 조금씩 증가시킴
            if (scrollAmount > iframeDoc.body.scrollHeight - iframe.clientHeight) {
                clearInterval(scrollInterval); // 끝까지 스크롤되면 멈춤
            }
        }, 300); // 50ms마다 스크롤 이동
    }, function() {
        // 마우스가 떠났을 때 자동 스크롤 멈춤
        clearInterval(scrollInterval); // 자동 스크롤을 멈춤

        iframeDoc.body.scrollTop = 0;
        iframeDoc.documentElement.scrollTop = 0;
    });
    


    let horizontalIndex = 0; // 가로 슬라이드 인덱스
    let verticalIndex = 0;   // 세로 슬라이드 인덱스

    const horizontalSections = $('.horizontal-slider > div'); // 가로 슬라이드 요소들
    const verticalSections = $('.wrap > div');     // 세로 슬라이드 요소들

    const totalHorizontal = horizontalSections.length;
    // const totalVertical = verticalSections.length;
    const totalVertical = $('.wrap > div').length;

    // 가로 슬라이드
    $('#nextproject, #nomanualproject').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {}
        const horizontalOffsetVW = -horizontalIndex * 100;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#ikeaproject').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {}
        const horizontalOffsetVW = -horizontalIndex * 200;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#addproject').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {}
        const horizontalOffsetVW = -horizontalIndex * 300;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });

    $('#backBtn').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {}
        const horizontalOffsetVW = -horizontalIndex * 100;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#backBtn2').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {}
        const horizontalOffsetVW = -horizontalIndex * 200;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#backBtn3').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {}
        const horizontalOffsetVW = -horizontalIndex * 300;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });

        // 세로 슬라이드 버튼 클릭 시
    $('#nextabout').on('click', function() {
        verticalIndex++;
        const verticalOffsetVH = verticalIndex * 100;
        $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    });
    $('#backBtn_about').on('click', function() {
        verticalIndex--;
        if (verticalIndex < 0) {}
        const verticalOffsetVH = -verticalIndex * 100;
        $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    });


    let scrollTimeout;  // 스크롤 이벤트를 처리하기 위한 타이머

    // 스크롤 이벤트 처리
    $(window).on('wheel', function(e) {
        e.preventDefault();  // 기본 스크롤 동작 방지

        if (scrollTimeout) {
            clearTimeout(scrollTimeout);  // 이전 타이머 취소
        }

        // 150ms 후에 슬라이드 이동
        scrollTimeout = setTimeout(function() {
            if (e.originalEvent.deltaY > 0) {
                // 아래로 스크롤 시
                verticalIndex++;
                if (verticalIndex >= totalVertical) {
                    verticalIndex = 0;  // 끝에 도달하면 처음으로 돌아가기
                }
            } else {
                // 위로 스크롤 시
                verticalIndex--;
                if (verticalIndex < 0) {
                    verticalIndex = totalVertical - 1;  // 처음으로 돌아가면 마지막 슬라이드로 이동
                }
            }

            // 슬라이드 이동
            const verticalOffsetVH = verticalIndex * 100;
            $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
        }, 100);  // 150ms 후에 슬라이드 이동
    });

    let touchStartY = 0;

    // 터치 시작 시 위치 기록
    $(window).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    // 터치 끝 시 이동 방향 감지
    $(window).on('touchend', function(e) {
        const touchEndY = e.originalEvent.changedTouches[0].clientY;

        if (touchEndY > touchStartY) {
            // 위로 스와이프 (슬라이드 위로 이동)
            verticalIndex--;
            if (verticalIndex < 0) {
                verticalIndex = totalVertical - 1;
            }
        } else if (touchEndY < touchStartY) {
            // 아래로 스와이프 (슬라이드 아래로 이동)
            verticalIndex++;
            if (verticalIndex >= totalVertical) {
                verticalIndex = 0;
            }
        }
        
        const verticalOffsetVH = verticalIndex * 100;
        $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    });
});