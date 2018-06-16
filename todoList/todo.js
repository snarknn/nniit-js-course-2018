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


    function getTimer(){
        var i = 0;
        var interval;

        return function(maxI){
            interval = setInterval(function(){
                if(i<maxI)
                    console.log(maxI + '-' + i++);
                else
                    clearInterval(interval);
            }, 1000)
        }
    }

    var t = getTimer();
    t(10);





    function fibonacci(){
        var var1 = 0;
        var var2 = 1;
        var buf = 0;
        var count = 2;

        return function(num){
            while(count<num){
                buf = var1 + var2;
                var1 = var2;
                var2 = buf;
                count++;
            }

            console.log(num + ' число фибоначчи: ' + var2);

            var1=0;
            var2=1;
            buf=0;
            count=2; //Для повторного использования
        }
    }


    var f = fibonacci();
    f(100);
    f(20);


    var arr = [ [1,2,3],[4,5,6],[7,8,9]];

    // var arr = [[1,1,1,1,1,1],[1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1,1]]

    var reduceArr = arr.reduce(function(sum, current) {
        var buf = [];
        for(var i =0;i<current.length;i++){
            buf[i]=current[i];
        }
        if(sum!=0){
            for(var i =0;i<current.length;i++){
                buf[i]+=sum[i];
            }
            if (current.length<sum.length){  // На случай, если массивы разной длины
                for(;i<sum.length;i++){
                    buf[i]=sum[i];
                }
            }

        }
        return buf;
    }, 0);




    console.log('Результирующий массив ' + reduceArr);
    console.log(reduceArr);
}