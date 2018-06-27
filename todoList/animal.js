var animal = {
    eats:true,
    jumps:false
}

var rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

for (v in rabbit){
    console.log(v)
}

console.log(rabbit)
console.log(rabbit.eats)