const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf-8");
const list = data.split("\n").map(item => parseInt(item));

// Part 1

let increases = 0;
let index = 0;
for (const item of list) {
	if (index == 0) {
		index++;
		continue;
	}
	if (item > list[index - 1]) increases++;
	index++;
}

console.log(`Part 1 = ${increases} (${list.length} Items)`);

// Part 2

increases = 0;
index = 0;
for (const item of list) {
	if (index == 0) {
		index++;
		continue;
	}
	const current = item + list[index + 1] + list[index + 2];
	const last = list[index - 1] + item + list[index + 1];
	if (current > last) increases++;
	index++;
}

console.log(`Part 2 = ${increases} (${list.length} Items)`);
