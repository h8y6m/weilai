$(function(){
    var $win=$('.banner-left');
    var $imgs=$('.banner-left>a');
    var $btnR=$('.btnr');
    var $btnL=$('.btnl');
    var $indexBtn=$('.index');
    var $len=$imgs.length;
    var flag=true;
    console.log($imgs)
    $imgs.css('left','100%').eq(0).css('left','0');
    for(var i=1;i<=$len;i++){
        // $indexBtn.append('<li></li>');
        // var str=i;
        // if(i==1){
        //     var str='<li class="hot">'+i+'</li>';
        // }else{
        //     var str='<li>'+i+'</li>';
        // }
        var str=i==1?'<li class="hot"></li>':'<li></li>';
        $indexBtn.append(str);
    }
    
    var $lis=$('.index>li');
    var now=0;
    var next=0;
    var time=1000;
    var t=setInterval(moveR,time);
    function moveR(){
        next++;
        if(next==$len){
            next=0;
        }
        $imgs.eq(next).css('left','100%');
        $imgs.eq(now).animate({'left':'-100%'});
        $imgs.eq(next).animate({'left':'0'},function(){
            flag=true;
        });
        
        $lis.eq(now).removeClass('hot');
        $lis.eq(next).addClass('hot');
        now=next;
    }

     function moveL(){
        next--;
        if(next<0){
            next=$imgs.length-1;
        }
        $imgs.eq(next).css('left','-100%');
        $imgs.eq(now).animate({'left':'100%'});
        $imgs.eq(next).animate({'left':'0'},function(){
            flag=true;
        });
        
        $lis.eq(now).removeClass('hot');
        $lis.eq(next).addClass('hot');
        now=next;
    }

    $lis.click(function(){
        if(!flag){return;}
        flag=false;
        var i=$(this).index();
        if(now==i){
            return;
        }
        if(now<i){
            $imgs.eq(i).css('left','100%');
            $imgs.eq(now).animate({'left':'-100%'},500);
            $imgs.eq(i).animate({'left':'0'},500);
        }else if(now>i){
            $imgs.eq(i).css('left','-100%');
            $imgs.eq(now).animate({'left':'100%'},500);
            $imgs.eq(i).animate({'left':'0'},500);
        }
        $imgs.eq(now).animate({left:'100%'},500);
        $imgs.eq(i).animate({left:'0'},500,function(){
            flag=true;
        });
        $lis.eq(now).removeClass('hot');
        $lis.eq(i).addClass('hot');
        next=now=i;
    })
    $win.mouseover(function(){
        clearInterval(t);
    })
    $win.mouseout(function(){
        t=setInterval(moveR,time);
    })
    $btnR.click(function(){
        if(flag){
            flag=false;
             moveR();
        }
       
    })
    $btnL.click(function(){
        if(flag){
            flag=false;
             moveL();
        }
       
    })
})