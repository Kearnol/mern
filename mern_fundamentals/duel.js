class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res -= this.power
            console.log(`${this.name} attacks ${target.name}. ${target.name}'s resilience = ${target.res}`)
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
        return this
    }
}

class Effect extends Card { 
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude; 
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat = "resilience"){
                target.res += this.magnitude;
            }
            else if(this.stat = "power"){
                target.power += this.magnitude;
            }
            console.log(`${this.name} card played | ${target.name} resilience = ${target.res} | power = ${target.power}`)
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
        return this
    }
    
}

const rb_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
const bb_ninja = new Unit("Red Belt Ninja", 4, 5, 4);
const hard_algo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3.", "resilience", 3);
const promise_rej = new Effect("Unhandled Promise Rejection", 1, "Reduce Target's resilience", "resilience", -2);
const pair_prog = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

hard_algo.play(rb_ninja)
bb_ninja
promise_rej.play(rb_ninja)
pair_prog.play(rb_ninja)
rb_ninja.attack(bb_ninja)
