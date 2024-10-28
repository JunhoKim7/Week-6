
const fruit = ["apple", "pear", "papaya"];

fruit.forEach((f) => console.log(f));

function print(item){
    console.log(item);
}

fruit.forEach(print);

// works w/o variable
[777, 888, 111].forEach((n) => console.log(n));

["apple", "pear", "papaya"].forEach((f,i,a) => console.log(i,f,a));

// EXTRA CREDIT - shows difference between current & previous value
[11,14,16,25].forEach((n, i ,a) => i ? console.log(n - a[i-1]) : 0);
