const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf-8");
const list = data.split("\n");

// Part 1

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
	index++;
}

let epsilon = [];

for (const char of gamma) {
	if (char == "0") epsilon.push("1");
	else epsilon.push("0");
}

gamma = gamma.join("");
epsilon = epsilon.join("");

console.log(`Part 1 = ${parseInt(gamma, 2) * parseInt(epsilon, 2)} (Gamma = ${parseInt(gamma, 2)} & Epsilon = ${parseInt(epsilon, 2)}`);

// Part 2

let available = list;
for (let index = 0; true; index++) {
	let zeros = 0;
	let ones = 0;
	for (const item of available) {
		if (item[index] == "0") zeros++;
		else ones++;
	}
	if (zeros > ones) available = available.filter(item => item[index] == "0");
	else available = available.filter(item => item[index] == "1");
	if (available.length == 1) break;
}
const oxygenGenRating = available[0];

available = list;
for (let index = 0; true; index++) {
	let zeros = 0;
	let ones = 0;
	for (const item of available) {
		if (item[index] == "0") zeros++;
		else ones++;
	}
	if (ones < zeros) available = available.filter(item => item[index] == "1");
	else available = available.filter(item => item[index] == "0");
	if (available.length == 1) break;
}
const cO2Rating = available[0];

console.log(`Part 2 = ${parseInt(oxygenGenRating, 2) * parseInt(cO2Rating, 2)} (Oxygen Generator Rating = ${parseInt(oxygenGenRating, 2)} & CO2 Scrubber Rating = ${parseInt(cO2Rating, 2)})`);
