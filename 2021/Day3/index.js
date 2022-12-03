const fs = require('fs');

const data = fs.readFileSync(__dirname + '/data.txt', 'utf-8');
const list = data.split('\n');

let count0s = [];
let count1s = [];
for (const item of list) {
	let index = 0;
	for (const char of item) {
		if (!count0s[index]) count0s[index] = 0;
		if (!count1s[index]) count1s[index] = 0;
		if (char == "0") {
			count0s[index] += 1;
		} else {
			count1s[index] += 1;
		}
		index++;
	}
}

let gamma = [];
let index = 0;
for (const item of count0s) {
	if (item > count1s[index]) gamma.push("0");
	else gamma.push("1");
	index++
}

let epsilon = [];

for (const char of gamma) {
	if (char == "0") epsilon.push("1");
	else epsilon.push("0");
}

gamma = gamma.join("")
epsilon = epsilon.join("")

let final = parseInt(gamma, 2) * parseInt(epsilon, 2);

console.log(`Part 1 = ${final} (Gamma = ${parseInt(gamma, 2)} (${gamma}) & Epsilon = ${parseInt(epsilon, 2)} (${epsilon})`)