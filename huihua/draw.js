class Draw {
    constructor(cobj, option) {
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;
    }

    rect(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox, oy, mx - ox, my - oy);
        this.cobj[this.style]();
    }

    line(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox, oy);
        this.cobj.lineTo(mx, my);
        this.cobj.stroke();
    }

    init() {
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth = this.width;
    }

    circle(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;//pow指的平方  sqrt开根号
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,Math.PI*2);
        
        // this.cobj.arc(ox, oy, r, 0, Math.PI * 2);
        this.cobj[this.style]();
    }
    circle1(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        console.log(r);
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,Math.PI*2);
        
        this.cobj[this.style]();
    }
     poly(ox,oy,mx,my,s){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        var angle=Math.PI/s;
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(var i=0;i<s;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2);
        }
        this.cobj[this.style]();
        this.cobj.restore();
    }
    circlecenter(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2),Math.pow(my-oy,2))/2;
        this.cobj.arc(ox,oy,r,0,Math.PI*2);
        this.cobj[this.style]();
    }

    pen(ox, oy, mx, my) {
        this.init();
        this.cobj.lineTo(mx, my);
        this.cobj.stroke();
        this.cobj.stroke();
    }

   
    erase(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,10,10);
    }
}

