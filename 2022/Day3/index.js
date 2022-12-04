const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const p1List = data.split("\n").map(item => [item.slice(0, item.length / 2), item.slice(item.length / 2)]);

// Part 1

let chars = [];
for (const item of p1List)
	for (const c of item[0])
		if (item[1].includes(c)) {
			chars.push(c);
			break;
		}

let sum = 0;
for (const char of chars) sum += char.toUpperCase() === char ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;

console.log(`Part 1 = ${sum}`);

// Part 2

const p2List = [];
for (let i = 0; i < p1List.length; i += 3) p2List.push([p1List[i].join(""), p1List[i + 1].join(""), p1List[i + 2].join("")]);

chars = [];

for (const item of p2List)
	for (const c of item[0])
		if (item[1].includes(c) && item[2].includes(c)) {
			chars.push(c);
			break;
		}

sum = 0;
for (const char of chars) sum += char.toUpperCase() === char ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;

console.log(`Part 2 = ${sum}`);
