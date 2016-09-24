$(function(){
    //定义尺寸
    var designWidth=480;
    var fontSize=100;
    function reSize(){
        var deviceWidth=document.documentElement.clientWidth;
        var ratio=deviceWidth/designWidth;//得到比例
        var newFontSize=ratio<1?fontSize*ratio:100;
        document.documentElement.style.fontSize=newFontSize+"px";
    }
    reSize();
    window.onresize=reSize;
})
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        loop: true,
        autoplay:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

    })
})
$(function(){
    $(window).scroll(function(){
        var scrollTops=$(this).scrollTop();
       if(scrollTops>700){
           $(".topr").show();
       }else{
           $(".topr").hide();
       }
    })

        $(".topr").click(function(){
            $("body,html").animate({scrollTop:0});
        })

})

$(function(){
    var msg=$(".msg");
    var len=msg.length;
    msg.css({top:"0.41rem"}).eq(0).css({top:0});
    var index=0;
    var next=0;
    setInterval(move,2000)
    function move(){
       next++;
        if(next==len){
            next=0;
        }
        msg.eq(next).css({top:"0.41rem"});
        msg.eq(index).animate({top:"-0.41rem"});
        msg.eq(next).animate({top:0});
        index=next;
    }
})
