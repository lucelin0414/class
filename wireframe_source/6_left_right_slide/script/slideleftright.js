start();         //start()함수를 구동시켜줌
//전체 이미지의 개수, 첫번째 이미지(인덱스 0번째), 두번째 이미지(인덱스 1번째), 세번쨰 이미지(인덱스 2번째)까지 총 3개를 imgs 변수에 저장함

var imgs = 2;
var now = 0;   //첫번째 이미지(인덱스 0번째)부터 시작 초기값을 now 변수에 저장함

function start(){    //start 함수 생성
    //.slide_box > img의 첫번째 요소의 형제들에게 .style(css) 속성 margin-left:-2000px를 추가함
    $(".slide_box > img").eq(0).siblings().css({"margin-left":"-2000px"});
    //3초 간격으로 slide()함수 호출 실행함
    setInterval(function(){slide();}, 3000);
}


function slide(){
    //변수 now와 변수 imgs의 값이 같다면 좌측 now 변수에 0을 대입해주고, 그렇지 않다면 now의 값에 1을 더한 값을 좌측 now 변수에 대입해 줌
    now = (now === imgs) ? 0 : now+=1;  //now = now + 1;
    // console.log(now)


    //now-1번째 <img>태그의 style(css) 속성에 margin-left:-2000px을 추가하고, 이미지를 사라지게 함.
    $(".slide_box > img").eq(now-1).css({"margin-left":"-2000px"});


    //now번째 <img>태그의 style(css)속성에 margin-left:0px을 추가하고, 이미지를 불러오는 구문
    $(".slide_box > img").eq(now).css({"margin-left" : "0px"});
    console.log(now)
}