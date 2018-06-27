function getTimer(interval){
    var i = 0
    var ST;
    return function timer(n){
        if (i < n && ST.){
            ST = setTimeout(function(){
                console.log(i++)
                timer(n);
            }, interval)
        }
    }
}

var timer1 = getTimer(1000);
timer1(5);
timer1(15)