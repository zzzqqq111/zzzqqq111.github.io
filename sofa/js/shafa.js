
// 二级标题
var active1=document.querySelectorAll(".active1 a");
var erji=document.querySelectorAll(".erji");
// Array.from(active1).forEach(function (v,i) {
// 	v.onmouseover=function(){
// 		v.style.background="#000";
// 		v.style.color="#ff7800";
// 		erji[i].style.display="block";
// 		console.log(erji[i]);
// 	}
// })
// 
var apply=document.querySelectorAll(".anzhuo-list li");
var detail=document.querySelectorAll(".app-block-over");
Array.from(apply).forEach(function (v,i) {
	v.onmouseover=function(){
		detail[i].style.opacity=1;
		// v.style.display="none";
	}
	v.onmouseout=function(){
		detail[i].style.opacity=0;
		// v.style.display="none";
	}
})

var shebei=document.querySelectorAll(".tab-con-item ul li");
var itemlist=document.querySelectorAll(".con-item-conten");
var fix=itemlist[0];
Array.from(shebei).forEach(function (v,i) {
	v.onmouseover=function(){
		fix.style.display="none";
		itemlist[i].style.display="block";
		v.style.height="auto";
		fix=itemlist[i];
	}
	// v.onmouseout=function(){
	// 	itemlist[i].style.display="none";
	// 	v.style.height=30+"px";
    //
	// }
});

var  ibanmgs=document.querySelectorAll(".banimg");
console.log(ibanmgs);
var imgt=setInterval(moveimg,1000);
var numing=0;
var imgobjj=ibanmgs[0];
function moveimg(){
	numing++;
	if(numing==2){
		numing=0;
	}
	if(numing<0){
		numing=0;
	}
	imgobjj.style.opacity=0;
	ibanmgs[numing].style.opacity=1;
	imgobjj=ibanmgs[numing];
}

