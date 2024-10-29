let teamMembers= [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Lesley", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

teamMembers.forEach((t, i) => console.log(i, t.join(", ")));

// let formattedList = teamMembers.map(t => t.join(", ")).map((s, i) => `Team ${ i + 1} - (${s})`);
// formattedList.forEach(item => console.log(item));

// teamMembers.forEach((t,i) => t.forEach(m=> console.log(i+1,m)));

const commas = list => list.join(", ");
const print = text => console.log(text);

const team = (roster, index) => `Team ${index + 1} - (${roster})`;

teamMembers.map(commas).map(team).forEach(print);