
var left=document.querySelector("main");
var startbtn=document.querySelector(".startgame");
var stopbtn=document.querySelector(".tingzhi");
var jieshubtn=document.querySelector(".jieshubtn");
var score=document.querySelector(".score");
var guanshu=document.querySelector(".guanka");
var shengming=document.querySelector(".shenming");
var  gamestart=document.querySelector(".youxi");
var startjm=document.querySelector(".start-box");
var tbody=document.querySelector("tbody");
var rank=document.querySelector(".rank");
var mask=document.querySelector(".mask");
var mask2=document.querySelector(".mask2");
var jixu=document.querySelector(".continnue");
var restart=document.querySelector(".restart");
var quit=document.querySelector(".quit");
var restart1=document.querySelector(".restart1");
var quit1=document.querySelector(".quit1");
var paihang=document.querySelector(".paihang");
var title=document.querySelector(".ph-title");
var different=document.querySelector(".different");
var differentjm=document.querySelector(".different-choose");
var returnindex=document.querySelector(".return-choose");
var nowscore=document.querySelector(".overscore");
var max=document.querySelector(".bestscore");
class Game{
    constructor(main,score,guanka,smresult){
        this.main=main;
        this.obj={};
        this.num=3;
        this.scoreele=score;
        this.score=0;
        this.guan=guanka;
        this.gk=1;
        this.speed=3;
        this.shengmingzhi=smresult;
        this.smresult=5;
        this.startword=true;
        this.xunhun=null;
//            this.maxscore=0;
        this.maxscore=localStorage.maxscore?JSON.parse(localStorage.maxscore):[];
    }
    _creatElements(){
        var div=document.createElement("div");
        div.className="zimu";
        do{
            var code=Math.floor(Math.random()*26+65);
            var english=String.fromCharCode(code);
        }while(this.obj[english]);
        div.style.backgroundImage=`url("images/${english}.png")`;
        do{
            var divleft=Math.floor(Math.random()*700);
        }while(this._check(divleft))
        var divtop=-Math.floor(Math.random()*100);
        div.style.left=divleft+"px";
        div.style.top=divtop+"px";
        this.obj[english]={left:divleft,top:divtop,ele:div};
        this.main.appendChild(div);
    }
    _check(left){
        for(var i in this.obj){
            if(left>this.obj[i].left-100&&left<this.obj[i].left+100){
                return true;
            }
        }
    }
    _move(){
        this.xunhun=setInterval(function () {
            for(var i in this.obj){
                var t=this.obj[i].top;
                t+=this.speed;
                this.obj[i].top=t;
                this.obj[i].ele.style.top=t+"px";
                if(t>this.main.offsetHeight){
                    this.smresult-=1;
                    this.shengmingzhi.innerHTML=this.smresult;
                    this.main.removeChild(this.obj[i].ele);
                    delete this.obj[i];
                    this._creatElements();
                    if(this.smresult<0){
                        this.gameover();
                        return;
                    }

                }
            }
        }.bind(this),70);
    }
    _keyboard(){
        document.onkeydown=function (e) {
            var r=e.keyCode;
            var zimu=String.fromCharCode(r);
            if(this.obj[zimu]){
                this.main.removeChild(this.obj[zimu].ele);
                delete this.obj[zimu];
                this.score++;
                this.scoreele.innerHTML=this.score;
                if(this.score%4==0){
                    this._addgunaka();
                }
                this._creatElements();
            }
        }.bind(this);
    }
    _addgunaka(){
        this.gk++;
        this.guan.innerHTML=this.gk;
        if(this.gk<=3){
            this._creatElements();
            this.num++;
        }else{
            this.speed++;
        }
    }
    start(){
        for(var i=0;i<this.num;i++){
            this. _creatElements();
        }
        this._move();//this指的是game
        this._keyboard();
//            保存一个最大值
//            this.maxscore=localStorage.maxscore?localStorage.maxscore:0;
//            保存3个数保存到一个数组里
        this.maxscore=localStorage.maxscore?JSON.parse(localStorage.maxscore):[];

    }
    play(){
        this._move();//this指的是game
        this._keyboard();
    }
    gameover(){
//       保存一个数
//            if(this.score<this.maxscore){
//                console.log(`最高分为${localStorage.maxscore}`);
//                console.log(`当前分数${this.score}`)
//            }else{
//                localStorage.maxscore=this.score;
//                console.log(`最高分为${this.score}`);
//                console.log(`当前分数${this.score}`);
//            }
         nowscore.innerHTML=this.score;
        if(this.maxscore.length<3) {
            var player = prompt("请输入姓名");
            // nowscore.innerHTML=this.score;
            this.maxscore.push({player, score: this.score});
            this.maxscore.sort(function (a, b) {
                if (a.score > b.score) {
                    return -1;
                } else {
                    return 1;
                }

            });
            
            localStorage.maxscore = JSON.stringify(this.maxscore);
            
        }else {
            if (this.score > this.maxscore[2].score) {
                var player = prompt("请输入姓名");
                this.maxscore.push({player, score: this.score});
                this.maxscore.sort(function (a, b) {
                    if (a.score > b.score) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.maxscore.pop();
                localStorage.maxscore = JSON.stringify(this.maxscore);
            }
        }
        max.innerHTML=this.maxscore[0].score;
        gamestart.style.display="block";
        mask2.style.display="block";
        this.startword=true;
        this.obj={};
        this.num=3;
        this.score=0;
        this.scoreele.innerHTML=0;
        this.gk=1;
        this.guan.innerHTML=1;
        this.smresult=5;
        this.main.innerHTML="";
        this.xunhun=null;
        this.speed=1;
        this.maxscore=0;
        this.shengmingzhi.innerHTML=5;
        clearInterval(this.xunhun);
//            保存3个数

    }
    pause(){
        clearInterval(this.xunhun);
        document._keyboard=null;//停止键盘事件
    }
    _getData(){
        var str="";
        var data=this.maxscore;
    }
    rank(){
        var str="";
        var data=this.maxscore;
        console.log(data);
        data.forEach(function (v,i) {
            str+=`<tr><td>${v.player}</td><td>${v.score}</td></tr>`;
        })
        tbody.innerHTML=str;
    }
}
var game=new Game(left,score,guanshu,shengming);

startbtn.onclick=function () {
    gamestart.style.display="block";
    startjm.style.display="none";
       if(game.startword){
           game.start();
           game.startword=false;
       }
}
different.onclick=function () {
    differentjm.style.display="block";
    startjm.style.display="none";
}
var flag=true;
stopbtn.onclick=function () {
    mask.style.display="block";
    game.pause();   
}
jixu.onclick=function () {
    if(flag){
        game.play();
        mask.style.display="none";
    }else{
        game.pause();
        mask.style.display="block";
    }
    flag=!flag;
}
restart.onclick=function () {
    mask.style.display="none";
    gamestart.style.display="none";
    startjm.style.display="block";   
    game.start();
    game.startword=false;
}
quit.onclick=function () {
    gamestart.style.display="none";
    startjm.style.display="block"; 
    mask2.style.display="none";  
    game.start();
    game.startword=false;
}
restart1.onclick=function () {
    mask.style.display="none";
    mask2.style.display="none";
    gamestart.style.display="none";
    startjm.style.display="block";   
    game.start();
    game.startword=false;
}
quit1.onclick=function () {
    gamestart.style.display="none";
    startjm.style.display="block";   
    mask2.style.display="none";
    game.start();
    game.startword=false;
}
title.onclick=function () {
    game.rank();
    paihang.style.display="block";
}
returnindex.onclick=function () {
    differentjm.style.display="none";
    startjm.style.display="block";
}