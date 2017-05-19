	
	// banner部分
			var big=document.querySelector(".banner-main");
			var imgsfive=document.querySelectorAll(".imgs li");
			var dians=document.querySelectorAll(".dian li");
			var prev=document.querySelector(".zuojaintou");
			var next=document.querySelector(".youjaintou");
			console.log(prev);
			console.log(next);
			prev.onclick=function(){
				num=num-2;
				move();
				console.log(num);
				
			}
			next.onclick=function(){
				move();
			}
			var dianobj=dians[0];
			var imgobj=imgsfive[0];
			var num=0;
			Array.from(dians).forEach(function(v,i){
				hover(v,function() {
					
				}, function() {
					/* Stuff to do when the mouse leaves the element */
				});
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
			big.onmouseover=function(){
				clearInterval(t1);
			}
			big.onmouseout=function(){
				t1=setInterval(move, 2000);
			}
	// 二级页面
		var firstlis=document.querySelectorAll(".firstlist>li");
			var seclis=document.querySelectorAll(".secondlist");
		var arr=[];
		Array.from(seclis).forEach(function(ul){
			var secevery=ul.querySelectorAll("li");
			var height=secevery.length*35-10;
			arr.push(height);
		});
		// console.log(arr);
		Array.from(firstlis).forEach(function(li,i){
			li.onmouseover=function(){
				seclis[i].style.height=arr[i]+"px";
			}
			li.onmouseout=function(){
				seclis[i].style.height=0;
			}
		});

	// weixin
		var saoma=document.querySelector(".weixin");
		var erweima=document.querySelector(".weixin-erweima");
		var gouwuchecon=document.querySelector(".gouwuche");
		var product=document.querySelector(".gou-con");
		saoma.onmouseover=function(){
			erweima.style.display="block";
		}
		saoma.onmouseout=function(){
			erweima.style.display="none";
		}
		gouwuchecon.onmouseover=function(){
			product.style.display="block";
			gouwuchecon.style.color="red";
		}
		gouwuchecon.onmouseout=function(){
			product.style.display="none";
			gouwuchecon.style.color="#000";
		}

	var fanhui=document.querySelector(".back img");
	fanhui.onclick=function(){
		// document.body.scrollTop=0;
		animate(document.body, {scrollTop:0},300);
	} 
	