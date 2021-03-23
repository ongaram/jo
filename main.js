$(document).ready(function(){
    var target = $(".sidebar");

    // 버튼을 클릭하면 사이드바 열림
    $(document).on("click", ".OpenBtn", function (e){
        target.show();
        target.addClass('emphasized');
    });

    // 사이드바 외부를 클릭하면 사이드바 닫힘
    $(document).mouseup(function (e){
        if(target.has(e.target).length==0) {
            target.hide();
            target.removeClass('emphasized');
        } 
    });
});