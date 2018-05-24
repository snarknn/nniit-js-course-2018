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
        var style;
        if (el.style.textDecoration === 'line-through'){
            style = 'none';
        }
        else{
            style = 'line-through';
        }
        el.style = 'text-decoration: '+ style;
    })
    list.appendChild(li);
    inputEl.value = '';
})