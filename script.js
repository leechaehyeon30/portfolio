$(document).ready(function() {
    // // 영상 요소
    // const video = document.getElementById("myVideo");

    // // 영상이 끝났을 때 이벤트 처리
    // video.onended = function() {
    // // 영상이 끝나면 영상 요소를 숨기기
    // video.style.display = "none";
    // };

    // // 창이 로드되면 자동으로 재생 시작
    // window.onload = function() {
    // video.play(); // 자동 재생
    // };


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
    $('.link_out_nomanual').click(function() {
        window.open("https://nomanual-shop.com/?srsltid=AfmBOorNuL7xK-ldpxxAj5kLUTIiHOarSBm1uW0IOEVl8agrNFZyOPtI", "_blank");
    });
    $('#viewSiteBtn').click(function() {
        window.open("https://leechaehyeon30.github.io/nomanual/", "_blank");
    });
    $('.link_out_ikea').click(function() {
        window.open("https://www.ikea.com/kr/ko/", "_blank");
    });
    $('#viewSiteBtn2').click(function() {
        window.open("https://leechaehyeon30.github.io/ikea/", "_blank");
    });



    let horizontalIndex = 0; // 가로 슬라이드 인덱스
    let verticalIndex = 0;   // 세로 슬라이드 인덱스

    const horizontalSections = $('.horizontal-slider > div'); // 가로 슬라이드 요소들
    const verticalSections = $('.wrap > div');     // 세로 슬라이드 요소들

    const totalHorizontal = horizontalSections.length;
    const totalVertical = verticalSections.length;
    // const totalVertical = $('.wrap > div').length;

    // 가로 슬라이드
    $('#nextproject, #nomanualproject, #go_100_fromikea, #go_100_fromadd, #go_100_fromadd2').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {
            horizontalIndex = totalHorizontal - 1;
        }
        const horizontalOffsetVW = -horizontalIndex * 100;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#ikeaproject, #go_200_fromadd, #go_200_fromadd2').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {
            horizontalIndex = totalHorizontal - 1;
        }
        const horizontalOffsetVW = -horizontalIndex * 200;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#addproject, #go_300_fromadd2').on('click', function() {
        horizontalIndex++;
        if (horizontalIndex >= totalHorizontal) {
            horizontalIndex = totalHorizontal - 1;
        }
        const horizontalOffsetVW = -horizontalIndex * 300;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });

    $('#backBtn, #back_home, #back_100_fromnomanual, #back_100_fromikea').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {
            horizontalIndex = 0;
        }
        const horizontalOffsetVW = -horizontalIndex * 100;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#backBtn2, #back_home2, #back_200_fromnomanual').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {
            horizontalIndex = 0;
        }
        const horizontalOffsetVW = -horizontalIndex * 200;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });
    $('#backBtn3, #back_home3').on('click', function() {
        horizontalIndex--;
        if (horizontalIndex < 0) {
            horizontalIndex = 0;
        }
        const horizontalOffsetVW = -horizontalIndex * 300;
        $('.horizontal-slider').css('transform', `translateX(${horizontalOffsetVW}%)`);
    });

    $('.horizontal-slider').on('transitionend', function() {
        console.log('애니메이션 끝');
        // 애니메이션이 끝난 후 추가적인 작업을 수행할 수 있습니다.
    });

        // 세로 슬라이드 버튼 클릭 시
    $('#nextabout, #about_move, #about_move2, #about_move3').on('click', function() {
        verticalIndex++;
        if (verticalIndex >= totalVertical) {
            verticalIndex = totalVertical - 1; // 마지막 슬라이드로 고정
        }
        const verticalOffsetVH = verticalIndex * 100;
        $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    });
    $('#backBtn_about, #go_project').on('click', function() {
        verticalIndex--;
        if (verticalIndex < 0) {
            verticalIndex = 0;
        }
        const verticalOffsetVH = -verticalIndex * 100;
        $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    });


    // let scrollTimeout;  // 스크롤 이벤트를 처리하기 위한 타이머

    // // 스크롤 이벤트 처리
    // $(window).on('wheel', function(e) {
    //     e.preventDefault();  // 기본 스크롤 동작 방지

    //     if (scrollTimeout) {
    //         clearTimeout(scrollTimeout);  // 이전 타이머 취소
    //     }

    //     // 150ms 후에 슬라이드 이동
    //     scrollTimeout = setTimeout(function() {
    //         if (e.originalEvent.deltaY > 0) {
    //             // 아래로 스크롤 시
    //             verticalIndex++;
    //             if (verticalIndex >= totalVertical) {
    //                 verticalIndex = 0;  // 끝에 도달하면 처음으로 돌아가기
    //             }
    //         } else {
    //             // 위로 스크롤 시
    //             verticalIndex--;
    //             if (verticalIndex < 0) {
    //                 verticalIndex = totalVertical - 1;  // 처음으로 돌아가면 마지막 슬라이드로 이동
    //             }
    //         }

    //         // 슬라이드 이동
    //         const verticalOffsetVH = verticalIndex * 100;
    //         $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    //     }, 100);  // 150ms 후에 슬라이드 이동
    // });

    // let touchStartY = 0;

    // // 터치 시작 시 위치 기록
    // $(window).on('touchstart', function(e) {
    //     touchStartY = e.originalEvent.touches[0].clientY;
    // });

    // // 터치 끝 시 이동 방향 감지
    // $(window).on('touchend', function(e) {
    //     const touchEndY = e.originalEvent.changedTouches[0].clientY;

    //     if (touchEndY > touchStartY) {
    //         // 위로 스와이프 (슬라이드 위로 이동)
    //         verticalIndex--;
    //         if (verticalIndex < 0) {
    //             verticalIndex = totalVertical - 1;
    //         }
    //     } else if (touchEndY < touchStartY) {
    //         // 아래로 스와이프 (슬라이드 아래로 이동)
    //         verticalIndex++;
    //         if (verticalIndex >= totalVertical) {
    //             verticalIndex = 0;
    //         }
    //     }
        
    //     const verticalOffsetVH = verticalIndex * 100;
    //     $('.wrap').css('transform', `translateY(-${verticalOffsetVH}%)`);
    // });
});