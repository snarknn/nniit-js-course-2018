// Задача 1
// Использовать Reduce с результатом не скаляром

var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13]
];

var result = arr.reduce(function (sum, curSubArr) { 
    // curSubArr[] выбранный в данный момент подмассив
    for (var i = 0; i < curSubArr.length; i++) {
        
      if (!sum[i])
        sum[i] = 0;

      // в sum[] накапливаем значения столбцов каждого подмассива
      sum[i] += curSubArr[i];
    }
  
    return sum;
  }, [])

result.forEach((result)=>console.log(result));

// Задача 2
// Посчитать числа фибоначчи до 100

function fibonacci(n){
    var init = function fib(x, y, n) {

        if (n <= 1)
            return x;

        else
            return fib(y,     // становится x
                       x + y, // становится у
                       n - 1
                    );
    }

    return init (0, 1, n); // инициализация
}
console.log(fibonacci(100));


// Задача 3
// Исправить код

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
t(5);