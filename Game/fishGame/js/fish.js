/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/1.
 */

var can1 ;
var can2 ;

var ctx1 ;
var ctx2 ;

var canWidth ;
var canHeight ;

var lastTime ;
var daltaTime ;

var bgPic = new Image() ;
var ane ;
var fruit ;
var mom ;
var baby ;

var mx ;
var my ;
var babyTail = [] ;
var babyEye = [] ;
var babyBoby = [] ;

var momTail = [] ;
var momEye = [] ;
var momBodyOra = [] ;
var momBodyBlue = [] ;

var data ;

var dust ;
var dustPic = [] ;

document.body.onload = game ;/*页面加载完成执行的函数*/
function game(){
    init() ;
    lastTime = new Date();
    daltaTime = 0 ;
    gameloop();
}
function init(){
    /*获取canvas context*/
    can1 = document.getElementById("canvas1");/*fish dust UI*/
    ctx1 = can1.getContext("2d") ;
    can2 = document.getElementById("canvas2");/*backage img*/
    ctx2 = can2.getContext("2d") ;

    can1.addEventListener("mousemove", onMouseMove, false) ;

    bgPic.src = "./src/background.jpg";
    canWidth = can1.width ;
    canHeight = can1.height ;

    ane = new aneObj() ;
    ane.init() ;
    fruit = new fruitObj() ;
    fruit.init() ;

    mom = new momObj() ;
    mom.init() ;

    baby = new babyObj() ;
    baby.init() ;

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for(var i = 0 ; i<8 ; i++){
        babyTail[i] = new Image() ;
        babyTail[i].src = "./src/babyTail"+i+".png"
    }
    for(var j = 0 ; j<2 ; j++){
        babyEye[j] = new Image() ;
        babyEye[j].src = "./src/babyEye"+j+".png"
    }
    for(var m = 0 ; m<20 ; m++){
        babyBoby[m] = new Image() ;
        babyBoby[m].src = "./src/babyFade"+m+".png"
    }
    for(var n = 0 ; n<8 ; n++){
        momTail[n] = new Image() ;
        momTail[n].src = "./src/bigTail"+n+".png"
    }
    for(var q = 0 ; q<2 ; q++){
        momEye[q] = new Image() ;
        momEye[q].src = "./src/bigEye"+q+".png"
    }

    data = new dataObj() ;

    for(var k = 0 ; k<8 ; k++){
        momBodyOra[k] = new Image() ;
        momBodyOra[k].src = "./src/bigSwim"+k+".png"
        momBodyBlue[k] = new Image() ;
        momBodyBlue[k].src = "./src/bigSwimBlue"+k+".png"

    }
    ctx1.font = "20px Verdana" ;
    ctx1.textAlign = "center" ;

    for(var w = 0 ; w<7 ; w++){
        dustPic[w] = new Image() ;
        dustPic[w].src = "./src/dust"+w+".png"
    }
    dust = new dustObj() ;
    dust.init() ;

}
function gameloop(){
    requestAnimFrame(gameloop);//根据及其的新能指定更新时间，会有FPS问题
    var now =  new Date();
    daltaTime = now - lastTime ;
    lastTime = now ;

    if(daltaTime >　40) daltaTime = 40 ;

    drawBackground() ;
    ane.draw() ;
    fruitMonitor() ;
    fruit.draw() ;

    ctx1.clearRect(0 ,0 ,canWidth , canHeight) ;
    mom.draw() ;
    baby.draw() ;

    momFruitsCollision() ;
    momBabyCollision() ;

    data.draw() ;
    dust.draw() ;




}
function onMouseMove(e){
    if(!data.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX : e.offsetX ;
            my = e.offsetY == undefined ? e.layerY : e.offsetY ;

        }
        //if(e.pageX){
        //    mx = e.pageX == undefined ? e.pageX : e.screenX ;
        //    my = e.pageY == undefined ? e.pageY : e.screenY ;
        //
        //}
    }
}