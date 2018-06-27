function Machine (power){
    console.log(arguments);
    this._power = power*0.9;
    this._enabled = false;

    this.enable = function(){
        this._enabled = (this._power>100) ? true : false;
        console.log('Output power is:', this._power)
    }

    this.disable = function(){
        this._enabled = false;
    }
}

function CoffeeMachine(power){
    Machine.apply(this, arguments);

    var parentEnable = this.enable;

    this.enable = function(){
        parentEnable.call(this)

        this.run()
    }

    var waterAmount = 0;

    console.log('Кофеварка создана, мощность ' + power);

    var that = this;


    this.waterAmount = function(w) {
        if (typeof w === 'undefined') return waterAmount;
        var water = Number(w)
        if (isNaN(water) || water <=0){
            throw new Error('no water!!!');
        }
    }

    var getBoilTime = function(){
        var time = waterAmount * 4200 * 80 / power;
        console.log(time);
        return time;
    };

    function ready(){
        console.log('Coffee is ready');
    }

    this.run = function(){
        if (!enabled) {
            throw Error('Please enable me first')
        }
        setTimeout(ready, getBoilTime())
    }

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.waterAmount(500)
coffeeMachine.run();


