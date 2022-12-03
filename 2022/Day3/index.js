const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const p1List = data.split("\n").map(item => [item.slice(0, (item.length / 2)), item.slice((item.length / 2))]);

const priorities = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26,"A":27,"B":28,"C":29,"D":30,"E":31,"F":32,"G":33,"H":34,"I":35,"J":36,"K":37,"L":38,"M":39,"N":40,"O":41,"P":42,"Q":43,"R":44,"S":45,"T":46,"U":47,"V":48,"W":49,"X":50,"Y":51,"Z":52};

// Part 1

let chars = [];
for (const item of p1List) for (const c of item[0]) if(item[1].includes(c)) {chars.push(c); break;}

let sum = 0;
for (const char of chars) sum += priorities[char];

console.log(`Part 1 = ${sum}`)

// Part 2

const p2List = [];
for(let i = 0; i < p1List.length; i += 3) p2List.push([p1List[i].join(""), p1List[i + 1].join(""), p1List[i + 2].join("")])

chars = [];

for (const item of p2List) for (const c of item[0]) if(item[1].includes(c) && item[2].includes(c)) {chars.push(c); break;}

sum = 0;
for (const char of chars) sum += priorities[char];

console.log(`Part 2 = ${sum}`)