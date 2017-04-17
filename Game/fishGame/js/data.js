/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/13.
 */

var dataObj = function (){
    this.fruitNum = 0 ;
    this.double = 1 ;
    this.scroe = 0 ;
    this.gameOver = false ;
};
//dataObj.prototype.reset = function(){
//    this.fruitNum = 0 ;
//    this.double = 1 ;
//    this.scroe = 0 ;
//
//};
dataObj.prototype.draw = function(){
    var w = can1.width ;
    var h = can1.height ;

    ctx1.save() ;
    ctx1.fillStyle = "white" ;
    ctx1.shadowBlur =20 ;
    ctx1.shadowColor = "white" ;
    ctx1.fillText("score "+this.scroe, w*0.5 , h-20) ;
    if(this.gameOver){
        this.alpha += daltaTime * 0.0005 ;
        if(this.alpha>1){
            this.alpha = 1 ;
        }
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha +")" ;
        ctx1.fillText("你死啦！", w*0.5 , h*0.5) ;
    }
    ctx1.restore() ;

};
dataObj.prototype.addScore = function(){
    this.scroe += this.fruitNum * 100 * this.double ;
    this.fruitNum = 0 ;
    this.double = 1 ;
}