/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/5.
 */
var fruitObj =function(){
    this.alive = [] ;//bool
    this.x = [] ;
    this.y = [] ;
    this.aneNo = [] ;
    this.l = [] ;
    this.spd = [] ;
    this.fruitTyue = [] ;
    this.orange = new Image() ;
    this.blue = new Image() ;
};
fruitObj.prototype.num = 30 ;
fruitObj.prototype.init = function(){
    for(var i = 0 ; i<this.num ; i++){
        this.alive[i] = false ;
        this.x[i] = 0 ;
        this.y[i] = 0 ;
        this.aneNo[i] = 0 ;
        this.spd[i] = Math.random()*0.017+0.003 ;
        this.fruitTyue[i] = "" ;
        //this.born(i) ;
    }
    this.orange.src = "./src/fruit.png" ;
    this.blue.src = "./src/blue.png" ;
};
fruitObj.prototype.draw = function(){
    for(var i = 0 ; i<this.num ; i++){
        //deaw
        if(this.fruitTyue[i] == "blue"){
            var pic = this.blue ;
        }else {
           var pic =  this.orange ;
        }
        if(this.alive[i]){
            if(this.l[i]<=14){
                var no = this.aneNo[i] ;
                this.x[i] =ane.headx[no] ;
                this.y[i] =ane.heady[no] ;
                this.l[i] += this.spd[i] * daltaTime ;
                ctx2.drawImage(pic, this.x[i] - this.orange.width*0.5, this.y[i] - this.orange.height*0.5 , this.l[i], this.l[i]) ;

            }else {
                this.y[i] -= this.spd[i]* 4 * daltaTime
                ctx2.drawImage(pic, this.x[i] - this.orange.width*0.5, this.y[i] - this.orange.height*0.5 , this.l[i], this.l[i]) ;

            }
            if(this.y[i]<10){
                this.alive[i] = false ;
            }
        }

    }
};


fruitObj.prototype.born = function(i){
    this.aneNo[i] = Math.floor(Math.random()*ane.num) ;
    this.l[i] = 0 ;
    this.alive[i] = true ;
    var ran = Math.random() ;
    if(ran< 0.1){
        this.fruitTyue[i] = "blue";//orage blue
    }else {
        this.fruitTyue[i] = "orange";//orage blue
    }

};
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
};
function fruitMonitor(){
    var num = 0 ;
    for(var i = 0; i<fruit.num; i++){
        if(fruit.alive[i]){
            num++;
        }
    }
    if(num<15){
        //send fruit
        sendFruit() ;
        return ;
    }
}

function sendFruit(){
    for(var i = 0 ; i<fruit.num ;i++){
        if(!fruit.alive[i]){
            fruit.born(i) ;
            return ;
        }
    }
}