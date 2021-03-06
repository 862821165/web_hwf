/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/1.
 */
var aneObj = function(){
    //start point control point end point

    this.rootx = [] ;
    this.headx = [] ;
    this.heady = [] ;
    this.amp= [] ;
    this.alpha= 0 ;
};
aneObj.prototype.num = 50 ;
aneObj.prototype.init = function(){
    for(var i=0 ; i<this.num ; i++){
        this.rootx[i] = i*16 + Math.random()*20 ;
        this.headx[i] = this.rootx[i] ;
        this.heady[i] = canHeight - 250 + Math.random() *50 ;
        this.amp[i] = Math.random()*40 + 40;
    }
};
aneObj.prototype.draw = function(){
    this.alpha += daltaTime*0.0008 ;
    var l = Math.sin(this.alpha) ;
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    for(var i = 0; i < this.num; i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i] = this.rootx[i] + l*this.amp[i] ;
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 120 ,this.headx[i] ,this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
    console.log("海葵加载完")
};