const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const list = data.split("\n");

let dirs = {};
let stack = [];
const normalFiles = {};
for (const item of list) {
	const data = item.split(" ");
	if (data[0] == "$") {
		if (data[1] == "cd") {
			switch (data[2]) {
				case "..":
					stack.pop();
					break;
				case "/":
					// stack = [];
					break;
				default:
					stack.push(data[2]);
					break;
			}
		}
	} else {
		const current = stack.join("/");
		let newStack = current + "/" + data[1];
		if (newStack.startsWith("/")) newStack = newStack.substring(1);
		dirs[current] = [...(dirs[current] ?? []), newStack];

		if (data[0] != "dir") normalFiles[newStack] = parseInt(data[0]);
	}
}

function getSize(item) {
	return (dirs[item] ?? []).map(i2 => normalFiles[i2] ?? getSize(i2)).reduce((a, b) => a + b, 0);
}

/** @type {Record<string, number>} */
const sizes = Object.fromEntries(Object.entries(dirs).map(([key, value]) => [key, getSize(key)]));

console.log(
	`Part 1 = ${Object.values(sizes)
		.filter(item => item <= 100000)
		.reduce((a, b) => a + b, 0)}`,
);

const shouldFree = sizes[""] - (70000000 - 30000000);
const toDelete = Math.min(...Object.values(sizes).filter(item => item > shouldFree));

console.log(`Part 2 = ${toDelete}`);
