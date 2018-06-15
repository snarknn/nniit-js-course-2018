'use strict'

window.onload = function(){
    var addButton = document.getElementById("addItem");

    addButton.addEventListener('click', function(){
        var list = document.getElementById('list');
        var inputEl = document.getElementById('todoInput');
        var input = inputEl.value;
        if (!input) return;
        var li = document.createElement('li');
        li.innerHTML = input;
        li.addEventListener('click', function(e){
            var el = e.target;
            var classList = el.classList;

            if (classList.contains('done')){
                classList.remove('done');
            }
            else{
                classList.add('done');
            }
        })
        list.appendChild(li);
        inputEl.value = '';
    })


    var timer = setInterval(timerFunc, 1000);
    var timerDiv = document.getElementById('time');

    function timerFunc(){
        var t = new Date()
        timerDiv.innerHTML = t.getHours()+':'
        + t.getMinutes() + ':'
        + t.getSeconds();
    }

//old
    // function getTimer(){
    //    var i = 0;
     
    //     return function(maxI){
    //         if (i < maxI) {
    //             setInterval(function(){
    //                 console.log(maxI + '-' + i++);
    //             }, 1000)
    //         }
    //     }
    
    // }

//end  old
var timer = document.getElementById('timer');
    function getTimer(){
       var i = 0;
     
        return function(maxI){
        
               var set= setInterval(function(){
                    console.log(maxI + '-' + i);
                    timer.innerHTML=maxI + '-' + i++;
                }, 1000);
                setTimeout(function(){clearInterval(set)},maxI*1000);//the condition for exit, when: maxI*1000 it's delay
            
        }
    
    }
     
    var startTimer10 = getTimer();
    startTimer10(10);


    var fibonachi = document.getElementById('fibonachi');
    function fib(n){
   
        var cal= function calculation(i,j,n){
            if (n < 2)
                return j;
             else
                return calculation(j,i+j,n -1);
            };
            return cal(0,1,n);

};

    fibonachi.innerHTML="фибоначи от 100+ "+fib(100);


var arr=["мама","мыла","раму","мылом"];
var reduceResult=document.getElementById('reduceResult');
//var sum=0;
var result=arr.reduce(function(sum=0, current, i){
  
        return sum+" "+current;
    });
reduceResult.innerHTML=result;

}