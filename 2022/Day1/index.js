const fs = require('fs');

const data = fs.readFileSync(__dirname + "/data.txt", 'utf-8');
const list = data.split('\n');

const elves = [];
let current = 0;
for (const item of list) {
	if (item === "") {
		elves.push(current);
		current = 0;
	} else {
		current += parseInt(item);
	}
}
elves.push(current);

const original = [...elves]

// Part 1
const first = Math.max(...elves)
console.log(`Part 1 = ${first} (Elf #${original.indexOf(first) + 1})`);

// Part 2
elves.splice(elves.indexOf(first), 1);
const second = Math.max(...elves)
elves.splice(elves.indexOf(second), 1);
const third = Math.max(...elves)
elves.splice(elves.indexOf(third), 1);
console.log(`Part 2 = ${first + second + third} (Elves #${original.indexOf(first) + 1}, #${original.indexOf(second) + 1}, and #${original.indexOf(third) + 1})`)