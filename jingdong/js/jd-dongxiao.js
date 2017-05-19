// 秒杀
	var  leavehour=document.querySelector(".xianshi-time1");
	var  leaveminute=document.querySelector(".xs-fen");
	var  leavesecond=document.querySelector(".xs-miao");


	function leavetime() {
		var now=new Date();
		var shengyu=new Date(2017,5,20,0,0,0);
		var fen=shengyu.getTime()-now.getTime();//获得剩余时间内的毫秒数
		var hours=Math.floor(fen/1000/60/60);
		var minute=Math.floor(fen/(1000*60)%60);
		var second=Math.floor(fen/1000%60);
		leavehour.innerHTML=hours;
		leaveminute.innerHTML=minute;
		leavesecond.innerHTML=second;
	}
	setInterval(leavetime, 1000);

// 右侧部分
 	var icon=document.querySelectorAll(".icon1");
	var about=document.querySelectorAll(".yincang");
	var tshow;
	Array.from(icon).forEach(function(ele,index){
		ele.onmouseover=function(){
			ele.style.backgroundColor="#c81623";
			clearTimeout(tshow);
			tshow=setTimeout(function(){
				about[index].classList.add("show");
			},200)	
		}
		ele.onmouseout=function(){
			clearTimeout(tshow);
			ele.style.backgroundColor="#7A6E6E";
			if(about[index].classList.contains("show")){

				about[index].classList.remove("show");
				about[index].classList.add("hide");
			}
		}
		Array.from(about).forEach(function(v){
			v.addEventListener("animationend", function(){
				if(v.classList.contains("hide")){
						v.classList.remove("hide");
				}
			})
		});
	});

// 顶部左侧
	var scotop=document.querySelector(".sclootop");
	window.onscroll=function(){
		var st=document.body.scrollTop;
		if(st>1000){
			scotop.style.top=0;	
		}else{
			scotop.style.top=-48+"px";	
		}
	}
// 左侧
	var leftnav=$(".leftnav");
	var floors=$(".leftnav li");
	var allcons=$(".content6");
	var leftt;
	$(window).scroll(function() {
		var sstt=$(this).scrollTop();
		if(sstt>allcons.eq(0).offset().top-50){
			leftnav.css({
				"opacity":1
			});;
		}else{
			leftnav.css({
				"opacity":0
			});;
		}
		clearTimeout(leftt);
		leftt=setTimeout(function(){
			allcons.each(function(index, el) {
				var oot=allcons.eq(index).offset().top;
				if(sstt>oot){
					floors.eq(index+1).addClass("active").siblings().removeClass("active");
				}
			});
		},50);
	});
	floors.click(function(){
		var index=$(this).index();
		var ot=allcons.eq(index).offset().top-50;
		$("html,body").animate({scrollTop: ot}, 500);
	}).hover(function() {
		$(this).addClass("active");
	}, function() {
		$(this).removeClass("active");
	});;

// back
	var back1=$(".leftnav ul div,.icon7");
	console.log(back1)
	back1.click(function () {
	    $("body,html").animate({scrollTop:0},500,"linear");
	});

	$(".newt").click(function(){
		if($(this).hasClass("active")){
			$.fn.fullPage.moveTo(1);
		}else{
			$.fn.fullPage.moveSectionDown();
		}
	})
// 关闭广告
	var close=document.querySelector(".top-img-con i");
	var one=document.querySelector(".top-img");
	close.onclick=function(){
		one.style.display="none";
	}

//第一行
	var noeaddress=document.querySelector("#li");
	var allcitys=document.querySelector(".citys");
	noeaddress.onmouseover=function(){
		noeaddress.style.background="white";
		allcitys.style.display="block";
	}
	noeaddress.onmouseout=function(){
		noeaddress.style.background="";
		allcitys.style.display="none";
	}

	var input=document.querySelector(".form-search input"); 
	input.onfocus=function(){
		if(this.value="奶粉"){
			this.value="";
		}
		if(this.value=""){
			this.value="奶粉";
		}
	}

//banner
	var banner=document.querySelectorAll(".banner-img li");
	var dianbtn=document.querySelectorAll(".banner-dian li");
	var bannerbox=document.querySelector(".banner");
	var prev=document.querySelector(".btnleft");
	var next=document.querySelector(".btnright");
	var banimg=banner[0];
	var dainobj=dianbtn[0];
	var banjingguo;
	var numb=0;
	var tb;
	Array.from(dianbtn).forEach(function(ele,index){
		hover(ele,function() {
			clearTimeout(banjingguo);
			banjingguo=setTimeout(function(){
				numb=index;
				dainobj.style.background="white";
				banimg.style.opacity=0;
				banimg.style.zIndex=1;
				dianbtn[index].style.background="#db192a";
				dainobj=dianbtn[index];
				banner[index].style.opacity=1;
				banner[index].style.zIndex=2;
				banimg=banner[index];
			}, 500);
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
	});

	tb=setInterval(moveb, 3000);
	function moveb(){
		numb++;
		if(numb==dianbtn.length){
			numb=0;
		}
		if(numb<0){
			numb=dianbtn.length-1;
		}
		dainobj.style.background="white";
		banimg.style.opacity=0;
		banimg.style.zIndex=1;
		dianbtn[numb].style.background="#db192a";
		dainobj=dianbtn[numb];
		banner[numb].style.opacity=1;
		banner[numb].style.zIndex=2;
		banimg=banner[numb];
	}
	bannerbox.onmouseover=function(){
		clearInterval(tb);
	}
	bannerbox.onmouseout=function(){
		tb=setInterval(moveb, 3000);
	}
	prev.onclick=function(){
		numb-=2;
		moveb();
	}
	next.onclick=function(){
		moveb();
	}

//优先品质

//秒杀
	var msbox=document.querySelector(".jdms-bottom-list");
	var msul=document.querySelector(".jdms-cb-left");
	var msli=document.querySelectorAll(".jdms-cb-left li");
	var msbtnleft=document.querySelector(".zuo");
	var msbtnright=document.querySelector(".you");
	var number=1;
	var flag=false;
	var mst;
	function msmove(){
		msul.style.transition="all 1s";
		number++;
		msul.style.marginLeft=-995*number+"px";
	}
	msul.addEventListener("transitionend", function(){
		if(number==4){
			msul.style.transition="none";
			number=1;
			msul.style.marginLeft=-995*number+"px";
		}
	})
	msul.onmouseover=function(){
		msbtnleft.style.display="block";
		msbtnright.style.display="block";
	}
	/*msul.onmouseout=function(){
		msbtnleft.style.display="none";
		msbtnright.style.display="none";
	}*/
	msbtnleft.onclick=function(){
		number-=2;
		msmove();
	}
	msbtnright.onclick=function(){
		msmove();
	}


	var youxiu=$(".content-bottom2 ul li");
	var youxiuul=$(".content-bottom2 ul");
	var yxbtn=$(".ypbtn div");
	var yxleftbtn=$(".c1-leftbtn");
	var yxrightbtn=$(".c1-rightbtn");
	var numyx=0;

	// 直播
	var liveli=$(".live-img li");
	var livebtn=$(".livebtn li");
	var prevbtn=$(".prebtn");
	var nextbtn=$(".nextbtn");
	function apply(youxiu,yxbtn,yxleftbtn,yxrightbtn){
		yxbtn.mouseover(function() {
			var index=$(this).index();
			numyx=index;
			yxbtn.filter(".ypactive").removeClass("ypactive").end().filter(this).addClass("ypactive");
			youxiu.filter(".activezj").removeClass("activezj").end().eq(index).addClass("activezj");
			var yxt=setInterval(moveyx, 5000);
			function moveyx(){
				numyx++;
				if(numyx==yxbtn.length){
					numyx=0;
				}
				if(numyx<0){
					numyx=0;
				}
				yxbtn.filter(".ypactive").removeClass("ypactive").end().eq(numyx).addClass("ypactive");
				youxiu.filter(".activezj").removeClass("activezj").end().eq(numyx).addClass("activezj");
			}
			$(".content-bottom2").hover(function() {
				clearInterval(yxt);
			}, function() {
				yxt=setInterval(moveyx, 5000);
			});;

			yxleftbtn.click(function(){
				numyx-=2;
				moveyx();
			});
			yxrightbtn.click(function(){
				moveyx();
			});
		});
	}
	apply(youxiu,yxbtn,yxleftbtn,yxrightbtn);
	apply(liveli,livebtn,prevbtn,nextbtn);

var lists=document.querySelectorAll(".nav-left li");
var list_mores=document.querySelectorAll(".banner_more");
Array.from(lists).forEach(function(v,i){
    v.onmouseover=function(){
        list_mores[i].style.display="block";
        list_mores[i].style.top=-30*i-15+"px";
    }
    v.onmouseout=function(){
        list_mores[i].style.display="none";
    }
})


//信息
var jddetail=document.querySelectorAll(".ddlist");
var droplist=document.querySelectorAll(".myjindong");
console.log(jddetail,droplist);
Array.from(jddetail).forEach(function(v,i){
	v.onmouseover=function(){
		v.style.background="white";
		droplist[i].style.display="block";
	}
	v.onmouseout=function(){
		v.style.background="";
		droplist[i].style.display="none";
	}
});