const fs = require('fs');

const data = fs.readFileSync(__dirname + '/data.txt', 'utf-8');
const splitByLine = data.split('\n');
const list = splitByLine.map(item => item.split(" "))

let horizontal = 0;
let depth = 0;

for (const [type, amount] of list) {
	switch (type) {
		case "forward":
			horizontal += parseInt(amount);
			break;
		case "down":
			depth += parseInt(amount);
			break;
		case "up":
			depth -= parseInt(amount);
			break;
	}
}

let final = horizontal * depth;

console.log(`Part 1 = ${final} (Horizontal ${horizontal} & Depth ${depth})`)


let aim = 0;
horizontal = 0;
depth = 0;

for (const [type, amount] of list) {
	switch (type) {
		case "forward":
			horizontal += parseInt(amount);
			depth += aim * parseInt(amount);
			break;
		case "down":
			aim += parseInt(amount);
			break;
		case "up":
			aim -= parseInt(amount);
			break;
	}
}

final = horizontal * depth;

console.log(`Part 2 = ${final} (Horizontal ${horizontal} & Depth ${depth} & Aim ${aim})`)