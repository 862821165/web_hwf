/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/11.
 */

var babyObj = function(){
    this.x ;
    this.y ;
    this.angle ;
    this.babyEye = new Image() ;
    this.babyBody = new Image() ;

    this.babyTailTimer = 0 ;
    this.babyTailCount = 0 ;

    this.babyEyeTimer = 0 ;
    this.babyEyeCount = 0 ;
    this.babyEyeInterval = 1000 ;

    this.babyBodyTimer = 0 ;
    this.babyBodyCount = 0 ;
};
babyObj.prototype.init = function(){
    this.x = canWidth*0.5 - 50 ;
    this.y = canHeight*0.5 + 50 ;
    this.angle = 0 ;
    //this.babyEye.src = "./src/babyEye0.png" ;
    this.babyBody.src = "./src/babyFade0.png" ;
    //this.babyTail.src = "./src/babyTail0.png" ;
};

babyObj.prototype.draw = function(){
    //lerp x,y
    this.x = lerpDistance(mom.x ,this.x ,0.98 ) ;
    this.y = lerpDistance(mom.y ,this.y ,0.98 ) ;

    //data angle
    //Math.atan2(y,x)
    var deltaY = mom.y - this.y ;
    var deltaX = mom.x - this.x ;
    var beta = Math.atan2(deltaY, deltaX)+ Math.PI ;

    //lerp angle
    this.angle = lerpAngle(beta , this.angle , 0.6) ;

    //lerp tail count
    this.babyTailTimer += daltaTime ;
    if(this.babyTailTimer > 40){
        this.babyTailCount = (this.babyTailTimer+1)%8 ;
        this.babyTailTimer %= 40 ;
    }

    //baby eye
    this.babyEyeTimer += daltaTime ;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount = (this.babyTailCount)%2 ;
        this.babyEyeTimer %= this.babyEyeInterval ;

        if(this.babyEyeCount == 0){
            this.babyEyeInterval = Math.random() * 1500 + 2000 ;
        }else {
            this.babyEyeInterval = 50 ;
        }
    }

    //baby body
    this.babyBodyTimer += daltaTime ;
    if(this.babyBodyTimer > 1000){
        this.babyBodyCount = this.babyBodyCount+1 ;
        this.babyBodyTimer %= 1000 ;
        if(this.babyBodyCount > 19){
            this.babyBodyCount = 19 ;
            //game over
            data.gameOver = true ;
        }
    }

    //ctx1
    ctx1.save();
    ctx1.translate(this.x, this.y) ;
    ctx1.rotate(this.angle) ;

    var babyTailCount = this.babyTailCount ;
    ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width*0.5+23, -babyTail[babyTailCount].height*0.5) ;
    var babyBodyCount = this.babyBodyCount ;
    ctx1.drawImage(babyBoby[babyBodyCount], -babyBoby[babyBodyCount].width*0.5, -babyBoby[babyBodyCount].height*0.5) ;
    var babyEyeCount = this.babyEyeCount ;
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width*0.5, -babyEye[babyEyeCount].height*0.5) ;

    ctx1.restore() ;
};