const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
let [graphData, actions] = data.split("\n\n").map(item => item.split("\n"));
// Array<[Amount, Original, Final]>
actions = actions.map(action => action.split(" ").filter(item => item != "move" && item != "from" && item != "to")).map(item => item.map(i => parseInt(i)));
graphData = graphData.map(item => item.match(/.{1,4}/g));

// Highest item is at the start, lowest item is at the end
const graph = [...Array(graphData[0].length)].map(() => []);
for (const item of graphData) {
	if (item.includes(" 1  ")) break;
	let index = 0;
	for (const char of item) {
		if (char[1] != " ") graph[index].push(char[1]);
		index++;
	}
}

// Part 1

const p1 = [...graph].map(item => [...item]);
for (const [amount, original, final] of actions) {
	for (let i = 0; i < amount; i++) {
		p1[final - 1].splice(0, 0, p1[original - 1].shift());
	}
}

console.log(`Part 1 = ${p1.map(item => item[0]).join("")}`);

// Part 2

const p2 = [...graph].map(item => [...item]);
for (const [amount, original, final] of actions) {
	p2[final - 1].splice(0, 0, ...p2[original - 1].splice(0, amount));
}

console.log(`Part 2 = ${p2.map(item => item[0]).join("")}`);
