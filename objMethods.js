'use strict'

function methods (){
    var firstName = 'Vasya'
    this.sayHi = function(hi){
        console.log(hi+ ' ' + this.name)
    }
}

var user1 = {
    name:'vasya'
}

var user2 = {
    name:'petya'
}


