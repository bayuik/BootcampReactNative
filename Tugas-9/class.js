//Soal 1 - animal class

//Realease 0
class Animal {
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name(){
        return this._name;
    };

    get legs(){
        return this._legs;
    }

    get cold_blooded(){
        return this._cold_blooded;
    }
}


let sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

console.log('\n');

//Release 1
class Ape extends Animal{
    constructor(name){
        super(name);
        this._legs = 2;
    }

    get legs(){
        return this._legs;
    }

    yell(){
        console.log(`Auooo`);
    }
}

class Frog extends Animal{
    constructor(name){
        super(name);
        this._legs = 4;
    }

    get legs(){
        return this._legs;
    }

    jump(){
        console.log(`hop hop`);
    }
}


let sungokong = new Ape('Kera sakti');
sungokong.yell();

let kodok = new Frog('buduk');
kodok.jump();


//Soal 2 - function to class
class Clock{
    constructor({template}){
        this.template = template;
    }

    render(){
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if(secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

        stop(){
            clearInterval(this.timer);
        };
    
        start() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        };
}

let clock = new Clock({template: 'h:m:s'});
clock.start();