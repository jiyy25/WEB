$(document).ready(function () {
    //화면이 준비되면 실행해라.

    setInterval(function () {
        $(".swiper-wraper").animate({ "marginLeft": -1200 }, 400, function () {
            $("div:first-child", this).appendTo($(this))
            //this 안의 첫번째 div를 this의 맨 뒤로 추가...
            $(this).css("marginLeft", 0)
        })
    }, 3000)


})