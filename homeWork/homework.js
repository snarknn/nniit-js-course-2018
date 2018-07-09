

// Таймер
function getTimer(){
    var i=0;
    return function(maxI){
        var timeOut=1000;
        for(var i=0;i<maxI;i++){
        setTimeout(function(){
            console.log(maxI +'-'+ i);
            i++;

        },timeOut);
        timeOut+=1000;
    }}

}
var t=getTimer();
t(10);





//задача с матрицей

var z=[
    [1,2, 3, 4],
    [5,34,56,9],
    [3,4, 5, 6],
];

// Вариант 1
function countColumns(z){
   var col=[];
    var arr=[];
    for(var i=0;i<z[0].length;i++){
        var sum=0;
        var s=0;
        for(var j=0;j<z.length;j++){
           sum+=z[j][i];
        }
           col.push(sum);
           arr.push(s);
    }
    return col;
}
console.log(countColumns(z));





//Вариант 2 (с map и reduce)
var arr=z[0].map((col,i)=>z.map(row=>row[i]));
var arrLast=arr.map((row, item,i)=> row.reduce((prev,next)=>prev+next));
 console.log(arrLast);



// Последовательность Фибоначчи
  function fibonacci(n){
     var arr=[0,1];
     for(var i=2;i<n;i++){
        ( arr.push(arr[i-2]+arr[i-1]));
       
     } 
     console.log(arr);
     return arr[n];
 }

console.log( fibonacci(100));