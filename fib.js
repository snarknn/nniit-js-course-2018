var fib = (function() {
    var cache = [0, 1];

    return function fib(n){
        if (cache[n] === undefined){
            cache[n] = fib(n-1) + fib(n-2)
        }
        return cache[n];
    }
})()

// var testFib = getFib()
console.log(fib(98))