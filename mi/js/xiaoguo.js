
    var big=document.querySelector(".banner-main");
    var imgsfive=document.querySelectorAll(".imgs li");
    var dians=document.querySelectorAll(".dian li");
    var zjt=document.querySelector(".btnleft");
    var yjt=document.querySelector(".btnright");
    // console.log(zjt);
    // console.log(yjt);
    var num=0;
    zjt.onclick=function(){
         num=num-2;
        // console.log(num);
        yidong();
    }
    yjt.onclick=function(){      
        yidong();
    }
    var lunbodian=dians[0];
    var fiveimgobj=imgsfive[0];
    var jingguo;
    Array.from(dians).forEach(function(v,i){
        hover(v,function() {
            clearTimeout(jingguo);
            jingguo=setTimeout(function(){
                num=i;
                lunbodian.style.background="rgba(0,0,0,0.4)";
                fiveimgobj.style.opacity=1;
                fiveimgobj.style.zIndex=2;
                imgsfive[i].style.opacity=1;
                imgsfive[i].style.zIndex=10;
                fiveimgobj=imgsfive[i];
                dians[i].style.background="rgba(255,255,255,0.5)";
                lunbodian=dians[i];
            }, 500);
        }, function() {
            
        });
        // v.onmouseover=function(){
        //     num=i;
        //     lunbodian.style.background="rgba(0,0,0,0.4)";
        //      fiveimgobj.style.opacity=1;
        //     fiveimgobj.style.zIndex=2;
        //     imgsfive[i].style.opacity=1;
        //     imgsfive[i].style.zIndex=10;
        //     fiveimgobj=imgsfive[i];
        //     this.style.background="rgba(255,255,255,0.5)";
        //     lunbodian=this;
        // }
    });
    var t=setInterval(yidong, 5000);
    
    function yidong(){
        num++;
        if(num==dians.length){
            num=0;
        }
        if(num<0){
            num=dians.length-1;
        }
        lunbodian.style.background="rgba(0,0,0,0.4)";
        fiveimgobj.style.opacity=1;
        fiveimgobj.style.zIndex=2;
        imgsfive[num].style.opacity=1;
        imgsfive[num].style.zIndex=10;
        fiveimgobj=imgsfive[num];
        dians[num].style.background="rgba(255,255,255,0.5)";
        lunbodian=dians[num];  
    }
    big.onmouseover=function (){
        clearInterval(t);
    };
    big.onmouseout=function(){
        t=setInterval(yidong, 5000);
    }; 
    
// 小米明星单品
    var hezi=document.querySelector(".dp-con");
 	var danpins=document.querySelector(".product1");
 	var danpinlist=document.querySelectorAll(".product-item1");
    // console.log(danpinlist);
 	var number=0;
    var shangyiye=document.querySelector(".exchange1");
    var xiayiye=document.querySelector(".exchange2");
 	setInterval(productmove, 5000);
 	function productmove(){
        number++;
        if(number==2){
            number=0;
        }
        if(number<0){
            number=0;
        }
        // console.log(number);
 		danpins.style.marginLeft=-1230*number+"px";
 	}
    shangyiye.onclick=function(){
        number-=2;
        productmove();
    }

    xiayiye.onclick=function(){
        productmove();
    }

    var hezi1=document.querySelector(".dap-con1");
    var danpins1=document.querySelector(".product2");
    var danpinlist1=document.querySelectorAll(".product-item2");
    // console.log(danpinlist);
    var number1=0;
    var shangyiye1=document.querySelector(".exchange3");
    var xiayiye1=document.querySelector(".exchange4");
    setInterval(productmove1, 5000);
    function productmove1(){
        number1++;
        if(number1==2){
            number1=0;
        }
        if(number1<0){
            number1=0;
        }
        // console.log(number);
        danpins1.style.marginLeft=-1230*number1+"px";
    }
    shangyiye1.onclick=function(){
        number1-=2;
        productmove1();
    }

    xiayiye1.onclick=function(){
        productmove1();
    }

// 内容部分
    var changgebox=document.querySelector(".changebox0");
    var rongqi=document.querySelector(".changebox0 ul");
    var tjlist=document.querySelectorAll(".changebox0 ul li");
    var zuojt=document.querySelector(".zj1");
    var youjt=document.querySelector(".yj1");
    var dianlist=document.querySelectorAll(".d1");
    var circlebtn1=dianlist[0];

    var changgebox1=document.querySelector(".changebox1");
    var rongqi1=document.querySelector(".changebox1 ul");
    var tjlist1=document.querySelectorAll(".changebox1 ul li");
    var zuojt1=document.querySelector(".zj2");
    var youjt1=document.querySelector(".yj2");
    var dianlist1=document.querySelectorAll(".d2");
    var circlebtn2=dianlist1[0];

    var changgebox2=document.querySelector(".changebox2");
    var rongqi2=document.querySelector(".changebox2 ul");
    var tjlist2=document.querySelectorAll(".changebox2 ul li");
    var zuojt2=document.querySelector(".zj3");
    var youjt2=document.querySelector(".yj3");
    var dianlist2=document.querySelectorAll(".d3");
    var circlebtn3=dianlist2[0];

    var changgebox3=document.querySelector(".changebox3");
    var rongqi3=document.querySelector(".changebox3 ul");
    var tjlist3=document.querySelectorAll(".changebox3 ul li");
    var zuojt3=document.querySelector(".zj4");
    var youjt3=document.querySelector(".yj4");
    var dianlist3=document.querySelectorAll(".d4");
    var circlebtn4=dianlist3[0];
    var num2=0;
function conmove(changgebox,rongqi,tjlist,zuojt,youjt,dianlist,circlebtn) {
    Array.from(dianlist).forEach(function(dibtn,i){
        dibtn.onclick=function(){
            num2=i;
            rongqi.style.marginLeft=-296*i+"px";
            circlebtn.style.background="#333";
            circlebtn.style.border="2px solid #fff";
            dianlist[i].style.border="2px solid #ff6700";
            dianlist[i].style.background="#fff";
            circlebtn=dianlist[i];
        }
    });
    function prevnext(){
        num2++;
        if(num2==dianlist.length-1){
            num2==0;
            youjt.onclick=null;
        }
        if(num2==-1){
            num2==0;
            zuojt.onclick=null;
        }
        rongqi.style.marginLeft=-296*num2+"px";
        circlebtn.style.background="#333";
        circlebtn.style.border="2px solid #fff";
        dianlist[num2].style.border="2px solid #ff6700";
        dianlist[num2].style.background="#fff";
        circlebtn=dianlist[num2];
    }
    zuojt.onclick=function(){
        num2-=2;
        prevnext();
    }
    youjt.onclick=function(){
        prevnext();
    }
}
conmove(changgebox,rongqi,tjlist,zuojt,youjt,dianlist,circlebtn1);
conmove(changgebox1,rongqi1,tjlist1,zuojt1,youjt1,dianlist1,circlebtn2);
conmove(changgebox2,rongqi2,tjlist2,zuojt2,youjt2,dianlist2,circlebtn3);
conmove(changgebox3,rongqi3,tjlist3,zuojt3,youjt3,dianlist3,circlebtn4);

// 二级页面
    var erji=document.querySelectorAll(".middle1");
    var backgrounder=document.querySelectorAll(".mobile1");
     // console.log(erji,backgrounder)
    Array.from(erji).forEach(function(elel,index){
        elel.onmouseover=function(){
             backgrounder[index].style.display="block";
        }
        elel.onmouseout=function(){
             backgrounder[index].style.display="none";
        }
    })

// 二级细节页面
  var detailscon=document.querySelectorAll(".detailcon");
  var alink=document.querySelectorAll(".detailscon a");
  var navtitle=document.querySelectorAll(".diyihang");
  Array.from(navtitle).forEach(function(ele,index) {
        ele.onmouseover=function(){
             detailscon[index].style.display="block";
        }
        ele.onmouseout=function(){
             detailscon[index].style.display="none";
        }
    })
  
