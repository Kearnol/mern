//1//
console.log(hello);                                   
var hello = 'world';                                 

//1// output = 
var hello;
console.log(hello);
hello = 'world';

//2// 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//2// output
var needle;
function test(){
    var needle
    needle = 'magnet';
    console.log(needle);
}
test()

//3// 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.="support method from-rainbow">log(brendan);



//3// output
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brandon = 'super cool';
console.="support method from-rainbow">log(brendan)

//4// 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//4// output
var food;
function eat(){
    var food;
    var food = "half-chicken";
    console.log(food);
    food = "gone"
}
food = "chicken";
console.log(food);
eat()

//5//
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//5// output
var mean;
function x(){
    var food;
    food = "chicken"
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log (food);
console.log(food);

//6//
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//6// output
var genre;
function rewind(){
    var genre;
    genre = "rock"
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
    }
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

//7//
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//7// output
var dojo;
function learn(){
    var dojo;
    dojo="seattle";
    console.log(dojo);
    dojo="burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//8-bonus//
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//8// output
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
