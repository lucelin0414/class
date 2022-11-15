// .banner_box 안에 img를 클릭했을 때 function() 함수를 호출해 줌

$(".banner_box img").click(function(){
    $("#popup").addClass("active");
});


//#popup 안에 button을 클릭했을 때 function() 함수를 호출해 줌.
$("#popup button").click(function(){
    $("#popup").removeClass("active");
})
