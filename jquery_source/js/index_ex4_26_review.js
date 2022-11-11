$(document).ready(function(){
  var totalNum = $(".vis > div").length;
  console.log(totalNum);
  var currentNum = 1;
  $(".page_n > span:first").text(currentNum);
  $(".page_n > span:last").text(totalNum);
$(".next_b").click(function(){
    currentNum++;
    // console.log(currentNum);
    if(currentNum > totalNum){
        currentNum = 1;
    }
    console.log(currentNum);
    $(".vis div:first").insertAfter(".vis div:last");
    $(".page_n > span:first").text(currentNum);
});

$(".prev_b").click(function(){
    currentNum--;
    // console.log(currentNum);
    if(currentNum < 1){
        currentNum = totalNum;
    }
    console.log(currentNum);
    $(".vis div:last").insertBefore(".vis div:first");
    $(".page_n > span:first").text(currentNum);
});

});