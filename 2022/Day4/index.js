const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const list = data.split("\n").map(item => item.split(",").map(i => i.split("-").map(i2 => parseInt(i2))));

let count = 0;
for (const [elf1, elf2] of list) if ((elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) || (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])) count++;

console.log(`Part 1 = ${count}`);

count = 0;
for (const [elf1, elf2] of list) {
	if (!(elf1[1] < elf2[0] || elf2[1] < elf1[0])) count++;
}

console.log(`Part 2 = ${count}`);
