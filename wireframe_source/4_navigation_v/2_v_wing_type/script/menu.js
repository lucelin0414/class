// .navi에 mouseover시 function() 을 호출함
$(".navi > ul > li").mouseover(function(){
    // .menu_box(this)의 자식(children) 선택자인
    // .menu_box를 slideDown()하고 stop() 처리함
    $(this).children(".menu_box").stop().slideDown();
});

// .navi에 mouseleave시 function() 을 호출함
$(".navi > ul > li").mouseleave(function(){
    // .menu_box(this)의 자식(children) 선택자인
    // .menu_box를 slideUp()하고 stop() 처리함
    $(this).children(".menu_box").stop().slideUp();
});
