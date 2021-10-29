const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//an array of pokémon objects where the id is evenly divisible by 3
const pokIDby3 = pokémon.filter(pokemon => pokemon.id % 3 === 0);
console.log(pokIDby3);

//an array of pokémon objects that are "fire" type
const firepok = pokémon.filter(p => {for(let type of p.types){return (type == "fire"? true:false)}});
console.log(firepok);

//an array of pokémon objects that have more than one type
const mulTypes = pokémon.filter(p => {return (p.types.length > 1? true:false)});
console.log(mulTypes);

//an array with just the names of the pokémon
console.log(pokémon.map(p => p.name).sort());

//an array with just the names of pokémon with an id greater than 99
console.log(pokémon.filter(p => p.id > 99).map(p => {let x = []; x.push(p.name); return x}));

//an array with just the names of the pokémon whose only type is poison
console.log(pokémon.filter(p => {
    for(let type of p.types){
        return (type == "poison" && p.types.length < 2? true:false)
    }}).map(p => {
        let x = []; x.push(p.name); x.push(p.types);
    return x }));

//an array containing just the first type of all the pokémon whose second type is "flying"
const secFly = pokémon.filter( p => {
        return (p.types[1] == "flying"? true:false)
    }).map(p => p.types[0])
console.log(secFly);

//a count of the number of pokémon that are "normal" type
const countNormal = pokémon.filter(p => {for(let type of p.types){return(type =="normal"? true:false)}}).length
console.log(countNormal);
