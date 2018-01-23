$("#container").fullpage({
	anchors: ["p1", "p2", "p3", "p4", "p5"],
	scrollingSpeed: 1000,
	navigation: true,
	navigationTooltips: ["欢迎", "个人资料", "专业技能", "作品展示", "请联系我"],
	navigationColor: ["red", "yellow"],
	fixedElements: "#menu",
	menu: "#menu",
	slidesNavigation:true,
	afterLoad:function(anchor,index){
            if(index===2){
             $(".about_left").css("transform","translateX(0)");
             $(".about_right").css("transform","translateX(0)");
            }
        },
        onLeave:function(index){
            if(index===2){
                $(".about_left").css("transform","translateX(-1000px)");
                $(".about_right").css("transform","translateX(1000px)");
            }
        }
})
$(".about_papgs li").click(function(){
	var index=$(this).index()
	$(".about_papgs li").removeClass("active")
	$(this).addClass("active")
	$(".about_right div").removeClass("active").eq(index).addClass("active")
})
{
	let scroll=document.querySelector(".home_mouse .scroll")
	let top=4
	function move(){
		if(top<20){
			top+=2
		}else if(top>=20){
			top=2
		}
		let TOP=top+"px"
		scroll.style.marginTop=TOP
	}
	setInterval(move,600)
}
