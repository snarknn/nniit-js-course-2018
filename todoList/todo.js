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


    function timer(elId){
        var t = new Date();

        setInterval(function(){
            t =new Date();
            outDate();
        }, 1000)

        function outDate(){
            var timerDiv = document.getElementById(elId);

            timerDiv.innerHTML = t.getHours()+':'
                + t.getMinutes() + ':'
                + t.getSeconds();
        }
    }

    var newTimer = new timer('time');




    ///////////////////////////////

    // var timer = setInterval(timerFunc, 1000);
    // var timerDiv = document.getElementById('time');

    // function timerFunc(){
    //     var t = new Date()
    //     timerDiv.innerHTML = t.getHours()+':'
    //     + t.getMinutes() + ':'
    //     + t.getSeconds();
    // }


    // function getTimer(){
    //     var i = 0;

    //     return function(maxI){
    //         if (i < maxI) {
    //             setInterval(function(){
    //                 console.log(maxI + '-' + i++);
    //             }, 1000)
    //         }
    //     }
    // }

    // var t = getTimer();
    // t(10);


 

}