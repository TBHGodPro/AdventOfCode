const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");

function solve(amount) {
	let current = [];
	for (const char of data) {
		if (current.length == amount) current.shift();
		current.push(char);
		if (current.length == amount) if (current.every(char => !(current.filter(item => item == char).length > 1))) break;
	}
	return data.indexOf(current.join("")) + amount;
}

console.log(`Part 1 = ${solve(4)}`);

console.log(`Part 2 = ${solve(14)}`);
