


var area=document.querySelector(".local");
var shengfen=document.querySelector(".shenfen");
var body=document.querySelector("body");
area.onclick=function(){
    shengfen.style.display="block";
}
// body.onclick=function(){
//     shengfen.style.display="none";
// }
// 
// var xijie=document.querySelector("nav ul");
var daohang=document.querySelectorAll("nav ul li");
var nav=document.querySelectorAll(".nav-con1");
var dhlist=document.querySelectorAll(".nav1");
dhlist.forEach(function(v,index){
    v.onmouseover=function(){
        v.style.background="#f3f3f3";
        v.style.color="#0085d0";
        nav[index].style.display="block";
    }
    v.onmouseout=function(){
        v.style.background="#E4E4E4";
        v.style.color="#666";
         nav[index].style.display="none";
    }
});
nav.forEach(function(ele){
    ele.style.background="#fff";
})
    var gonggaos=document.querySelectorAll(".notice li");
    var gg=document.querySelector(".gonggao");
    var jtz=document.querySelector(".jtz")
    var jty=document.querySelector(".jty")
    function move3(){
        var str=gonggaos[0].innerHTML;
        for(let i=0;i<gonggaos.length-1;i++){
            gonggaos[i].innerHTML=gonggaos[i+1].innerHTML;
        }
        gonggaos[gonggaos.length-1].innerHTML=str;

    }

    function move4(){
        var str1=gonggaos[gonggaos.length-1].innerHTML;
        for(let i=gonggaos.length-1;i>0;i--){
            gonggaos[i].innerHTML=gonggaos[i-1].innerHTML;
        }
        gonggaos[0].innerHTML=str1;

    }

    var t5=setInterval(move3,5000);
    gg.onmouseover=function(){
        clearInterval(t5);
    }
    gg.onmouseout=function(){
        t5=setInterval(move3,5000);
    };
    jtz.onclick=function () {
        move4()
    };
    jty.onclick=function () {
        move3()
    }



// banner图
var banner_box=document.querySelector(".banner");
var imgs=document.querySelectorAll(".ul-imgs li");
var dots=document.querySelectorAll(".lunbo li");
var prebtn=document.querySelector("#zuo-btn");
var nextbtn=document.querySelector("#you-btn");
// console.log(banner_box,imgs,dots,prebtn,nextbtn)
var num1=0;
var z=5;
var flag=true;
var lbt=setInterval(move,5000);
function move(){
    imgs[num1].classList.add("leftOut");
    dots[num1].classList.remove("active");
    num1++;
    if(num1==imgs.length){
        num1=0;
    }
    imgs[num1].classList.add("leftIn");
    dots[num1].classList.add("active");
    imgs[num1].style.zIndex=z++;
}

imgs.forEach(function(img){
    img.addEventListener("animationend",function(){
        img.className="";
        flag=true;
    })
})

banner_box.onmouseover=function(){
    clearInterval(lbt);
}

banner_box.onmouseout=function(){
    lbt=setInterval(move,5000);
}

Array.from(dots).forEach(function(dot,index){
    dot.onclick=function(){
        if(num1==index){
            return;
        }
        if(num1<index){
            imgs[num1].classList.add("leftOut");
            imgs[index].classList.add("leftIn");
        }else{
            imgs[num1].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
        }

        dots[num1].classList.remove("active");
        dot.classList.add("active");
        imgs[index].style.zIndex=z++;
        num1=index;
    }
})

nextbtn.onclick=function(){
    if(flag){
        move();
        flag=false;
    }

}

prebtn.onclick=function(){
    if(flag){
        imgs[num1].classList.add("rightOut");
        dots[num1].classList.remove("active");
        num1--;
        if(num1==-1){
            num1=imgs.length-1;
        }
        imgs[num1].classList.add("rightIn");
        dots[num1].classList.add("active");
        imgs[num1].style.zIndex=z++;
        flag=false;
    }

}


var input=document.querySelector(".ins input");
input.onfocus=function(){
    if(this.value="请输入手机号"){
                this.value="";
            }
    if(this.value=""){
        this.value="请输入手机号";
    }
}
var money=document.querySelector(".money");
var moneylist=document.querySelectorAll(".money li");
// console.log(money,moneylist);
Array.from(moneylist).forEach(function(one,i){
    one.onmouseover=function(){
        one.style.background="#e40077";
        one.style.color="#fff";
        one.style.border="1px solid #e40077";
    }
    one.onmouseout=function(){
        one.style.background="#fff";
        one.style.color="#666";
        one.style.border="1px solid #dadada";
    }
})
