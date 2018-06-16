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

    // Task #1 (Reduce)
    console.log('Task 1');
    var matrix = [
        [1, 2, 3, 12],
        [4, 5, 6, -5],
        [7, 8, 9, 0]
      ];
    
    var result = matrix.reduce(function(prev, curr) 
        {return curr.map(function(val, idx2){return val + prev[idx2]})}, [0, 0, 0, 0]);
    result.forEach(function(item) {console.log(item)});

    // Task #2 (Fibonacci)
    console.log('Task 2');
    var num1 = 78;
    function fib1(n) {
        if (n == 0) {
            return 0;
        }
        else if (n == 1) {
            return 1;
        }

        var arr = [0, 1];
        while (arr.length < n+1) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        //console.log(arr);
        return arr[arr.length - 1];
    }
    var fibRes1 = fib1(num1);
    console.log(fibRes1);

    function fib2(n) { 
        if (n == 0) {
            return 0;
        }
        else if (n == 1) {
            return 1;
        }

        var a = 0, b = 1, c = a + b;
        var count = 2;
        while (count < n) {
            a = b;
            b = c;
            c = a + b;
            count++;
        }
        return c;
    }
    var fibRes2 = fib2(num1);
    console.log(fibRes2);

    // Task #3
    console.log('Task 3');
    function getTimer(){
        var i = 0;
        return function(maxI){
            setInterval(function(){
                if (i < maxI) {
                    console.log(maxI + '-' + i++);
                }
            }, 1000)
        }
    }
    var t = getTimer();
    t(12);
}