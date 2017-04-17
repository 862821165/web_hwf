/**
 * Created by 黄伟峰
 *  邮箱：web_hwf@sina.com
 *  on 2017/4/11.
 */

/*判断大鱼和果实的距离*/

function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){

                //calculate length
                var l=calLength2(fruit.x[i],fruit.y[i], mom.x, mom.y);
                if(l<900){
                    //fruit eaten
                    fruit.dead(i);
                    data.fruitNum++ ;
                    mom.momBodyCount++ ;
                    if(mom.momBodyCount > 7){
                        mom.momBodyCount = 7 ;
                    }
                    if(fruit.fruitTyue[i] == "blue"){
                        data.double = 2 ;
                    }
                }
            }
        }
    }
}
/*大鱼喂小鱼*/
function momBabyCollision(){
    if(data.fruitNum > 0 && !data.gameOver){
        var l=calLength2(mom.x,mom.y, baby.x, baby.y);
        if(l<900){
            //fruit eaten
            baby.babyBodyCount = 0 ;
            mom.momBodyCount = 0 ;
            //score
            data.addScore() ;
        }
    }
}
