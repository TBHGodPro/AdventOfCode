const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const list = data.split("\n").map(item => item.split(" "));

// Part 1

const beats = {
	X: "C",
	Y: "A",
	Z: "B",
};
const loses = {
	X: "B",
	Y: "C",
	Z: "A",
};

let score = 0;
for (const [op, me] of list) {
	if (beats[me] == op) score += 6;
	else if (loses[me] == op) score += 0;
	else score += 3;

	if (me == "X") score += 1;
	else if (me == "Y") score += 2;
	else if (me == "Z") score += 3;
}

console.log(`Part 1 = ${score}`);

// Part 2

const draw = {
	A: "X",
	B: "Y",
	C: "Z",
};
const win = {
	A: "Y",
	B: "Z",
	C: "X",
};
const lose = {
	A: "Z",
	B: "X",
	C: "Y",
};

const scores = {
	X: 1,
	Y: 2,
	Z: 3,
};

score = 0;
for (const [op, result] of list) {
	switch (result) {
		case "X": // Lose
			// Lose so no score change
			score += scores[lose[op]];
			break;
		case "Y": // Draw
			score += 3;
			score += scores[draw[op]];
			break;
		case "Z": // Win
			score += 6;
			score += scores[win[op]];
			break;
	}
}

console.log(`Part 2 = ${score}`);
