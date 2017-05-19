/*
* @Author: 小
* @Date:   2017-04-17 19:12:39
* @Last Modified by:   小
* @Last Modified time: 2017-04-17 19:21:22
*/

	var background=["#E8E8E8","#FFE4ED","#E8E8E8","#E8E8E8","#FFD430"];
	var banner=document.querySelector(".banner");
	var big=document.querySelector(".banner-main");
	var imgsfive=document.querySelectorAll(".imgs li");
	var dians=document.querySelectorAll(".dian li");
	var dianobj=dians[0];
	var imgobj=imgsfive[0];
	var num=0;
	Array.from(dians).forEach(function(v,i){
		v.onmouseover=function(){
			num=i;
			dianobj.style.background="rgba(0,0,0,0.5)";
			imgobj.style.opacity=1;
			imgobj.style.zIndex=2;
			imgsfive[i].style.opacity=1;
			imgsfive[i].style.zIndex=3;	
			imgobj=imgsfive[i];
			this.style.background="rgba(255,255,255,0.5)";
			dianobj=this;
		}
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
			imgobj.style.opacity=1;
			imgobj.style.zIndex=2;
			imgsfive[num].style.opacity=1;
			imgsfive[num].style.zIndex=3;	
			imgobj=imgsfive[num];
			dians[num].style.background="rgba(255,255,255,0.5)";
			dianobj=dians[num];
	 }
	banner.onmouseover=function(){
		clearInterval(t1);
	}
	banner.onmouseout=function(){
		t1=setInterval(move, 2000);
	}


// 第一部分
// 
	// 右边部分
	
	var liobj=document.querySelectorAll(".content1-right ul li");
	var masks=document.querySelectorAll(".mask");
	// var lastmask=document.querySelectorAll(".mask1");
	// 左边下面的选项卡
	var imgobj=document.querySelectorAll(".lunbotu");
	var zhao=document.querySelectorAll(".zhezhao");
	// 上面部分
	var huan=document.querySelectorAll(".content1-left-top li");
	var anniu=document.querySelectorAll(".an");
	var redian=document.querySelectorAll(".fc-item");
	Array.from(liobj).forEach(function(v,index){
		v.onmouseover=function () {
			masks[index].style.opacity=1;
		}
		v.onmouseout=function(){
			masks[index].style.opacity=0;
		}
	})
	Array.from(imgobj).forEach(function(v,index){
		v.onmouseover=function () {
			for(let i=0;i<imgobj.length;i++){
				huan[i].style.display="none";
			}
			zhao[index].style.display="block";
			huan[index].style.display="block";
			anniu[index].style.scale(1.1, 1.1);
		}
		v.onmouseout=function(){
			zhao[index].style.display="none";
			anniu[index].style.scale(1, 1);
		}
	})
