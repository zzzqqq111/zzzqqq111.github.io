

// 将页面加载后
window.onload=function () {
	const designWidth=750;
	const fontSize=100;
	function resizeFont () {
		var CW=document.documentElement.clientWidth;
		var radio=CW/designWidth;
		var newFontSize=fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";	
	}
	resizeFont();
	window.onresize=resizeFont;
}