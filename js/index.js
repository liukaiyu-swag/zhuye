$("#container").fullpage({
	anchors: ["p1", "p2", "p3", "p4", "p5"],
	slidesColor: ['#999', '#333', '#999', '#333','#999'],
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
	$(".about_right .about_con").removeClass("active").eq(index).addClass("active")
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
	setInterval(move,500)
}
{
	$(".about_bth").click(function(){
		$(this)
		.hide()
		.next()
		.css("filter","none")
		.addClass("active")
	})
}
{
	$(".scene_left").click(function(){
			$(".scene ul"). transition({
				rotateY:"+=60"
			})
		})
		$(".scene_right").click(function(){
			$(".scene ul"). transition({
				rotateY:"-=60"
			})
		})
}
{
	let canvas = document.querySelectorAll(".skill_right canvas")
	let scenes=document.querySelectorAll(".scene ul li")
		function progress(canvas,max,color="deepskyblue") {
			let cobj = canvas.getContext("2d")
			cobj.lineWidth = 18
			cobj.lineCap = "round"
			cobj.strokeStyle = color
			cobj.font = "30px 微软雅黑"
			cobj.textAlign = "center"
			cobj.textBaseline = "middle"
			cobj.fillStyle = "white"
			let n = 0
			function fn() {
				n++
				if(n < max) {
					requestAnimationFrame(fn)
				}
				cobj.clearRect(0, 0, 200, 200)
				let angle = 2 * Math.PI * n / 100 - Math.PI / 2
				cobj.save()
				cobj.shadowColor="#FFFFFF"
				cobj.shadowBlur="10"
				cobj.beginPath()
				cobj.arc(100, 100, 60, -Math.PI / 2, angle)
				cobj.stroke()
				cobj.restore()
				cobj.fillText(n + "%", 100, 100)
			}
			fn()
		}
		scenes.forEach(function(e,index){
			e.onclick=function(){
				for(let i=0;i<canvas.length;i++){
					canvas[i].classList.remove("active")
				}
				canvas[index].classList.add("active")
				if(index===0){
				progress(canvas[0],80,"red")
				}
				if(index===1){
				progress(canvas[1],85,"yellow")
				}
				if(index===2){
				progress(canvas[2],85,"SlateBlue")
				}
				if(index===3){
				progress(canvas[3],70,"Cyan")
				}
				if(index===4){
				progress(canvas[4],65,"	Lime")
				}
				if(index===5){
				progress(canvas[5],60,"OrangeRed")
				}
			}
		})
}
