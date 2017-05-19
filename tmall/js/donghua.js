// 内容部分
	// 右边部分
	 	var liobj=document.querySelectorAll(".content1-right ul li");
			var masks=document.querySelectorAll(".mask");
			Array.from(liobj).forEach(function(v,index){
				v.onmouseover=function () {
					masks[index].style.opacity=1;
				}
				v.onmouseout=function(){
					masks[index].style.opacity=0;
				}
			})
	// 左边下面的选项卡
		
		var imgobj=document.querySelectorAll(".lunbotu");//获取下面的图片
		// console.log(imgobj);
		var zhao=document.querySelectorAll(".zhezhao");
		// console.log(zhao);
		// 上面部分
		var huan=document.querySelectorAll(".content1-bigimg li");
		// console.log(huan);
		//获取上面大图的图片
		var anniu=document.querySelectorAll(".an");
		var redian=document.querySelectorAll(".fc-item");
		// 左右箭头
			var nextbtn=document.querySelector(".youjiantou");
			var prebtn=document.querySelector(".zuojiantou");
			// 图片滑动
			var sixbox=document.querySelector(".content1-left-center");
			Array.from(imgobj).forEach(function(v,index){
				
				v.onmouseover=function () {
					nextbtn.onclick=function(){
						sixbox.style.marginLeft=-484+"px";
						prebtn.style.display="block";
						nextbtn.style.display="none";
					}
					prebtn.onclick=function(){
						sixbox.style.marginLeft=0;
						nextbtn.style.display="block";
						prebtn.style.display="none";
					}
					for(let k=0;k<huan.length;k++){
						// console.log("oooooooooooo");
						huan[k].style.display="none";
						zhao[k].style.display="none";
					}
					zhao[index].style.display="block";
					huan[index].style.display="block";
				}
				v.onmouseout=function(){				
					zhao[index].style.display="none";
				}
				var time=0;
				var t=setInterval(con1move, 5000);
				function con1move(){
					time++;
					if(time==3){
						sixbox.style.marginLeft=-484+"px";
						prebtn.style.display="block";
						nextbtn.style.display="none";
					}
					if(time==6){
						sixbox.style.marginLeft=0;
						nextbtn.style.display="block";
						prebtn.style.display="none";
						time=0;
					}
					for(let k=0;k<imgobj.length;k++){
							huan[k].style.display="none";
							zhao[k].style.display="none";
						}
						zhao[time].style.display="block";
						huan[time].style.display="block";

				}
			})
// 导航和banner
	var liup=document.querySelector(".zhibo-con");//文字向上移动
	// 小猫
	var daohang=document.querySelectorAll(".nav-con1 li");
	var mao=document.querySelectorAll(".cat");
	 // console.log(mao);   
	var background=["#E8E8E8","#FFE4ED","#E8E8E8","#E8E8E8","#FFD430"];
	var banner=document.querySelector(".banner");
	var big=document.querySelector(".banner-main");
	var imgsfive=document.querySelectorAll(".imgs li");
	var dians=document.querySelectorAll(".dian li");
	var dianobj=dians[0];
	var imgsobj=imgsfive[0];
	var num=0;
	var jingguo;
	Array.from(daohang).forEach(function(v,i){
		v.onmouseover=function(){
			mao[i].style.top=-12+"px";
		}
		v.onmouseout=function(){
			mao[i].style.top=0+"px";
		}
	})
	Array.from(dians).forEach(function(v,i){
		hover(v,function() {
				clearTimeout(jingguo);
				jingguo=setTimeout(function(){
					num=i;
					banner.style.background=background[i];
					dianobj.style.background="rgba(0,0,0,0.5)";
					imgsobj.style.opacity=1;
					imgsobj.style.zIndex=2;
					imgsfive[i].style.opacity=1;
					imgsfive[i].style.zIndex=3;	
					imgsobj=imgsfive[i];
					dians[i].style.background="rgba(255,255,255,0.5)";
					dianobj=dians[i];
			},300)			
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});
	});
	var t1=setInterval(move, 2000);
	
	function move(){
		num++;
		if(num==dians.length){
			num=0;
		}
		if(num<0){
			num=dians.length-1;
		}	
		dianobj.style.background="rgba(0,0,0,0.5)";
		imgsobj.style.opacity=1;
		imgsobj.style.zIndex=2;
		imgsfive[num].style.opacity=1;
		imgsfive[num].style.zIndex=3;	
		imgsobj=imgsfive[num];
		dians[num].style.background="rgba(255,255,255,0.5)";
		dianobj=dians[num];
		banner.style.background=background[num];
	 }
	banner.onmouseover=function(){
		clearInterval(t1);
	}
	banner.onmouseout=function(){
		t1=setInterval(move, 2000);
	}

// 左右箭头
	var shuliang=0;
	setInterval(function(){
		if(shuliang==0){
			liup.style.transition="all 1s linear";//图片从第一张开始时，设置过渡属性
		}
		// if(shuliang==3){
		// 	shuliang=-1;
		// }
		shuliang++;
		liup.style.marginTop=-40*shuliang+"px";
		// console.log(shuliang);
	}, 2000);

	liup.addEventListener("transitionend", function(){
		if(shuliang==4){
			liup.style.transition="none";
			liup.style.margintop=0;
			shuliang=0;
		}
	});

// 分类部分
	// var leixing=document.querySelectorAll(".leixing li");
	// var erji=document.querySelector(".erjicon");
	// var colors=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","red","#f7a831","#f7a831","#6347ed","red","#6347ed","#f7a831","#3bc7b0","red","#3bc7b0"];
	// // console.log(lianjie);
	// Array.from(leixing).forEach(function(v,i){
	// 	v.onmouseover=function(){
	// 		v.style.background="white";
	// 		erji.style.display="block";
	// 		v.style.color=colors[i];	
			
	// 	}
	// 	v.onmouseout=function(){
	// 		v.style.background="#EDEDED";
	// 		v.style.color="#000";
	// 		erji.style.display="none";
	// 	}
	// });


// 左侧
	var leftbox=document.querySelector(".fix-left");
	var leftshow=document.querySelector(".content");
	// var leftul=document.querySelector(".fix-left ul");
	var floors=document.querySelectorAll(".allcon");
	var floorscon=document.querySelectorAll(".meili");
	var topshow=document.querySelector(".top");
	var fanhui=document.querySelector(".fan");
	var leftbackground=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#DD2727"];
	window.onscroll=function(){
		Array.from(floors).forEach(function(ele,i){
			// console.log(ele[i]);
			// console.log(floorscon[i].offsetTop);
			ele.onmouseover=function(){
				floors[i].style.background=leftbackground[i];
				ele.onclick=function(){
				  var gao=floorscon[i].offsetTop-50;
				  console.log(floorscon[i]);
				  animate(document.body, {scrollTop:gao});
				}
			}
			fanhui.onclick=function(){
				document.body.scrollTop=0;
			}
			ele.onmouseout=function(){
				floors[i].style.background="";
			}
			
		});
		var input=document.querySelector(".input");
		var st=document.body.scrollTop;
		// console.log(st)
		// console.log(leftshow.offsetTop);
		if(st>800){
			leftbox.style.width="36px";
			topshow.style.width="100%";
			topshow.style.height="50px";
			leftbox.style.height="332px";
		}else{
			leftbox.style.width=0;
			leftbox.style.height=0;
			topshow.style.width="0";
			topshow.style.height="0";
		}
		input.onfocus=function(){
			if(this.value="休闲型男够出彩"){
				this.value="";
			}
			if(this.value=""){
				this.value="请输入内容";
			}
		}	
	}

// 右侧导航栏
	var rightli=document.querySelectorAll(".fixed-right-one");
	var rightshow=document.querySelectorAll(".conshow");
	var back=document.querySelector(".one2");
	console.log(back);
	var tshow;
	back.onclick=function(){
		document.body.scrollTop=0;
	}
	Array.from(rightli).forEach(function(ele,index){
		ele.onmouseover=function(){
			ele.style.background="#C40000";
			clearTimeout(tshow);
			tshow=setTimeout(function(){
				rightshow[index].classList.add("show");
			}, 200);
		};	
			
		ele.onmouseout=function(){
			ele.style.background="#000";
			clearTimeout(tshow);
			if(rightshow[index].classList.contains("show")){
				rightshow[index].classList.remove("show");
				rightshow[index].classList.add("hide");
			}	
		};
		Array.from(rightshow).forEach(function(v){
			v.addEventListener("animationend", function(){
				if(v.classList.contains("hide")){
						v.classList.remove("hide");
				}
			})
		});
	});



// 左侧详细内容
var banner_tu_lefts=document.querySelectorAll(".leixing>li");
var banner_tu_left_rights=document.querySelectorAll(".banner-left-right-js");
var colors=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","red","#f7a831","#f7a831","#6347ed","red","#6347ed","#f7a831","#3bc7b0","red","#3bc7b0"];
Array.from(banner_tu_lefts).forEach(function(banner_tu_left,banner_tu_left_index){

    banner_tu_left.onmouseover=function(e){
        // e.stopPropagation();
        // e.cancelBubble=true;
        banner_tu_left.style.background="white";
        banner_tu_left.style.color=colors[banner_tu_left_index];
        banner_tu_left_rights[banner_tu_left_index].style.display="block";
    }

    banner_tu_left.onmouseout=function(){
    	banner_tu_left.style.background="";
        banner_tu_left.style.color="#000";
        banner_tu_left_rights[banner_tu_left_index].style.display="none";
    }
    li_num=banner_tu_left_index;
})