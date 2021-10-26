class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log(`Name: ${this.name} | strength: ${this.strength} | speed: ${this.speed} | health: ${this.health}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

const ninja1 = new Ninja("Devin", 100);
console.log(ninja1);
ninja1.drinkSake().showStats().sayName()
const {name} = ninja1

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){ // if wisdom is a default, but speed & strength are super defaults, how to order?
        super(name, 200, speed, strength)
        this.wisdom = wisdom
    }

    //classmethod: 
    speakWisdom(){
        super.drinkSake();
        console.log(`${this.name} drinks some Sake and says, "If you seek the perfect high –– find it within yourself."`)
        console.log(`${this.name}'s health = ${this.health}`)
        return this
    }
}

const sensei1 = new Sensei("Bubba Fatz");
console.log(sensei1);
sensei1.speakWisdom().showStats().sayName()
