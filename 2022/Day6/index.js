const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");

// Part 1

let current = [];
for (const char of data) {
	if (current.length == 4) current.shift();
	current.push(char);
	if (current.length == 4) if (current.every(char => !(current.filter(item => item == char).length > 1))) break;
}

console.log(`Part 1 = ${data.indexOf(current.join("")) + 4}`);

// Part 2

current = [];
for (const char of data) {
	if (current.length == 14) current.shift();
	current.push(char);
	if (current.length == 14) if (current.every(char => !(current.filter(item => item == char).length > 1))) break;
}

console.log(`Part 2 = ${data.indexOf(current.join("")) + 14}`);
