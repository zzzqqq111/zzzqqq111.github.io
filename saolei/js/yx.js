    $(document).ready(function () {
        var number=10;
        var t;
        var num=10;
//        var usetime=0;
        var begintime=0;
        var fen;
        var miao;
     	var besttime=localStorage.besttime?JSON.parse(localStorage.besttime):[];
        function create(number) {
            do{
                $(".scene").empty();
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        var islei=Math.random()>0.9;
                        $("<div>").addClass(function () {
                            if(islei){
                                return "block lei";
                            }else{
                                return "block";
                            }
                        }).attr("id",i+"-"+j).data("pos",{x:i,y:j}).mousedown(mousedownEvent).appendTo(".scene");
                    }
                }
            }while($(".lei").length!=number);
        }
        function mousedownEvent(e) {
            if(e.which==1){
                leftclick.call(this);
            }else{
                rightclick.call(this);
            }
        }
        function leftclick() {
            if($(this).hasClass("lei")){
                $(".lei").addClass("show");
                clearInterval(t);
                $(".scene div").unbind("mousedown");
                $(".mask").show();
            }
            else{
                var pos=$(this).data("pos");
                var n1=0;
                for(var  n=pos.x-1;n<=pos.x+1;n++){
                    for(var m=pos.y-1;m<=pos.y+1;m++){
                        if($("#"+n+"-"+m).hasClass("lei")) {
                            n1++;
                        }
                    }
                }
//                if($("#"+(pos.x-1)+"-"+(pos.y-1)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x-1)+"-"+(pos.y)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x-1)+"-"+(pos.y+1)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x)+"-"+(pos.y-1)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x)+"-"+(pos.y+1)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x+1)+"-"+(pos.y-1)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x+1)+"-"+(pos.y)).hasClass("lei")){
//                    n++;
//                }
//                if($("#"+(pos.x+1)+"-"+(pos.y+1)).hasClass("lei")){
//                    n++;
//                }
                $(this).html(n1).addClass("num");
                if(n1==0){
                    for(let n=pos.x-1;n<pos.x+1;n++){
                        for(let m=pos.y-1;m<pos.y+1;m++){
                            var obj=$("#"+n+"-"+m);
                            if(obj.length==1 && !obj.hasClass("num")){
                                leftclick.call(obj[0]);
                            }
                        }
                    }
                }
            }
        }
        function rightclick() {
            if($(this).hasClass("num")){
                return;
            }
            if($(this).hasClass("flag")){
                $(this).removeClass("flag");
                num++;
            }else{
                num--;
                if(num<0){
                    num++;
                    alert("选择错误");
                    return;
                }
                $(this).addClass("flag");
                if(num==0){
                    if($(".flag").filter(".lei").length==number){
                        alert("成功");
                        clearInterval(t);
                        var player = prompt("请输入姓名");
                        besttime.push({player, utime: begintime});
                        besttime.sort(function (a, b) {
                            if (a.utime > b.utime) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                        localStorage.besttime = JSON.stringify(besttime);
                    }else {
                        alert("请重新选择");
                        num++;
                        $(this).removeClass("flag");
                        return;
                    }
                }
            }
            $(".flagnum").html(num);
        }
       // $(document).on("contextmenu",function (e) {
       //     e.preventDefault();
       // })

        function time() {
            begintime++;
            fen=Math.floor(begintime/60);
            miao=begintime%60;
            if(miao<10){
                $(".time").html("0"+fen+":"+"0"+miao);
            }
           else{
                $(".time").html("0"+fen+":"+miao);
            }
        }
        $(".restart").click(function () {
            $(".mask").hide();
            clearInterval(t);
            t=setInterval(time,1000);
            create(10);
            begintime=0;
            $(".flagnum").html(10);
            time();
        })
        $(".restart1,.back,.return img").click(function(){
        	$(".start").show();
        	$(".mask").hide();
        	$(".mask2").hide();
            clearInterval(t);
            begintime=0;
            $(".flagnum").html(10);
            $(".time").html("00:"+"00");
        })
        
        $(".easy").click(function () {
        	$(".start").hide();
            clearInterval(t);
            t=setInterval(time,1000);
            num=10;
            number=10;
            begintime=0;
            time();
            $(".flagnum").html(num);
            create(10,10);
        });
        $(".middle").click(function () {
        	$(".start").hide();
            clearInterval(t);
            t=setInterval(time,1000);
            num=15;
            number=15;
            begintime=0;
            time();
            $(".flagnum").html(num);
            create(15,15);
        });
        $(".high").click(function () {
        	$(".start").hide();
            clearInterval(t);
            t=setInterval(time,1000);
            num=20;
            number=20;
            begintime=0;
            time();
            $(".flagnum").html(num);
            create(20,20);
        });
        $(".gamestart").click(function () {
            t=setInterval(time,1000);
            create(10);
            $(".start").hide();
        })
        $(".rank").click(function () {
            $(".mask2").show();
            var str="";
            var data=besttime;
            console.log(data);
            data.forEach(function (v,i) {
                str+=`<tr><td>${v.player}</td><td>${v.utime+"秒"}</td></tr>`;
            })
            $("tbody").html(str);
        })
        create(10);
        $(".chengdu").click(function() {
        	$(".gamestart,.chengdu").hide();
        	$(".nanyi").show();
        });

    });