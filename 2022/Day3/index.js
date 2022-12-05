const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const p1List = data.split("\n").map(item => [item.slice(0, item.length / 2), item.slice(item.length / 2)]);

// Part 1

let sum = 0;
for (const item of p1List)
	for (const char of item[0])
		if (item[1].includes(char)) {
			sum += char.toUpperCase() === char ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
			break;
		}

console.log(`Part 1 = ${sum}`);

// Part 2

const p2List = [];
for (let i = 0; i < p1List.length; i += 3) p2List.push([p1List[i].join(""), p1List[i + 1].join(""), p1List[i + 2].join("")]);

sum = 0;
for (const item of p2List)
	for (const char of item[0])
		if (item[1].includes(char) && item[2].includes(char)) {
			sum += char.toUpperCase() === char ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
			break;
		}

console.log(`Part 2 = ${sum}`);
