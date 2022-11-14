//대상 요소(태그)에 open 플러그인을 적용할 수 있도록
//jQuery 형식을 만듭니다.
//이벤트 타입(eventType)과 메시지를(message)를 매개변수로
//전달하면 해당 이벤트(eventType)가 발생할 때,
//지정한 메시지(message)를 경고 창으로 나타낼 수 있습니다.
$.fn.open = function(eventType, message){
    var ts = $(this);
    $.each(ts, function(i, o){     //i는 index, o는 object
        $(o).on(eventType, function(){
            alert(message);
        })
    })
}