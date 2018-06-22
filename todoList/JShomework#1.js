"use strict";

window.onload = function() {
var addButton = document.getElementById("addItem");

//обработчик событий
addButton.addEventListener('click', function() { 
    var list = document.getElementById('list');
    var inputEl = document.getElementById('todoInput');

    var input = inputEl.value;
    if(!input) return;

    var li = document.createElement('li');
    li.innerHTML = input;
    li.addEventListener("click", function(e) {

        var el = e.target;
        var classList = el.classList;

        if (classList.contains('done')) {
            classList.remove('done');
        }
        else {
            classList.add('done');
        }
    })
    list.appendChild(li);
    inputEl.value = '';
})

var timer = setInterval(timerFunc, 1000);
var timerDiv = document.getElementById('time');

function timerFunc() {
    var t = new Date()
    timerDiv.innerHTML = t.getHours() + ':' 
    + t.getMinutes() + ':'
    + t.getSeconds();
}

//3rd task
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
t(10);
}

//2nd task
var fibonacci = (function() {
    var memo = {};
    function f(n) {
      var value;
      if (n in memo) {
        value = memo[n];
      } else {
        if (n === 0 || n === 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);

        memo[n] = value;
      }
      return value;
    }
    return f;
  })();

    var userNum=+prompt('Введите порядковый номер числа Фибоначчи');
    alert(fibonacci(userNum));

//1st task
var arr = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7]
];

var result = arr.reduce(function(sum, tmpArr) {
    for (var i = 0; i < tmpArr.length; i++) {
        
         if(!sum[i])
            sum[i] = 0;
            sum[i] += tmpArr[i];
}
return sum;
}, [])
result.forEach((result)=>console.log(result));