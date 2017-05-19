// 当页面加载之后
window.onload=function  () {
	// 常量 const
	const designWidh=750;
	const fontSize= 100;
	function resizeFont(){
		// 变量 var
		var CW = document.documentElement.clientWidth;
		
		var radio = CW/designWidh;

		var newFontSize= fontSize*radio;

		document.querySelector("html").style.fontSize= newFontSize + "px";
		
	}
	// 执行resizeFont
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize= resizeFont;
}