
const monsters = [
    { name:"Gorgon" },
    { name: "Dragon"},
    { name: "Fae"},
];

function getMonster(m, i){
    // `<div id="1">Fae</div>`
    return `<div id ="${i}">${m.name}</div>`
};

// .map() transfers input array into output array
console.log(monsters.map(getMonster).join('\n'));

const numbers = [1, 2, 3, 4];
console.log(numbers);

const separator = ".";
console.log(numbers.join(separator));
const text = "255.255.0.1";

const delimiter_AKA_splitter = ".";
const parsed = text.split(delimiter_AKA_splitter);
console.log(parsed)
console.log(parsed.join("."));