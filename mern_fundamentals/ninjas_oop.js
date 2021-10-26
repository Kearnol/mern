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
        console.log(`Ninja: ${this.name} | strength: ${this.strength} | speed: ${this.speed} | health: ${this.health}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

const ninja1 = new Ninja("Devin", 100);
console.log(ninja1);
// const {name} = ninja1
ninja1.drinkSake().showStats().sayName()