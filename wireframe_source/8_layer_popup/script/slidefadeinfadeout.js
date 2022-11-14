start(); // start() 함수를 구동시켜줌
// 전체 이미지의 개수, 첫번째 이미지(인덱스 0번째), 두번째 이미지(인덱스 1번째),
// 세번째 이미지(인덱스 2번째)까지 총 3개를 imgs 변수에 저장함
var imgs = 2;
var now = 0; // 첫번째 이미지(인덱스 0번째)부터 시작 초기값을 now 변수에 저장함

function start(){   // start() 함수 생성
    // .slide_box > img의 첫번째 요소의 형제들에게
    // fadeOut() 함수로 이미지를 사라지게 함
    $(".slide_box > img").eq(0).siblings().fadeOut('slow');
    // 3초 간격으로 slide() 함수 호출 실행함
    setInterval(function(){slide();}, 3000); 
}

function slide(){
        // 변수 now와 변수 imgs의 값이 같다면 좌측 now 변수에 0을 대입해주고,
        // 그렇지 않으면 now의 값에 1을 더한 값을 좌측 now 변수에 대입해 줌
    now = (now==imgs) ? 0 : now+=1;

    // now-1번째 <img>태그에 fadeOut() 함수로 이미지를 사라지게 함
    $(".slide_box > img").eq(now-1).fadeOut('slow');
    // now번째 <img>태그에 fadeIn() 함수로 이미지를 불러오게 함
    $(".slide_box > img").eq(now).fadeIn('slow');

}