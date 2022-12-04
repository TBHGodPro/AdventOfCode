const readline = require("node:readline");
const { readdir } = require("fs/promises");
const { join } = require("path");
const { stat } = require("node:fs");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = question => new Promise((res, rej) => rl.question(question, answer => (answer ? res(answer) : rej("Empty Response"))));

console.log("\n-------------------------------------\nWelcome to my AdventOfCode Solutions!\n-------------------------------------\n");

(async () => {
	const year = await ask("What year would you like to use? (leave empty for current) ").catch(() => new Date().getFullYear().toString());

	const days = await readdir(join(__dirname, year)).catch(() => null);
	if (!days) return console.error("That isn't a valid year!");

	console.log(`\nHere are the available days for ${year}:\n${days.map(day => day[3]).join("\n")}`);

	const day = parseInt(await ask("What Day would you like to run? ").catch(() => ""));
	if (!day) return console.error("No Day Inputted.");
	if (!days.includes(`Day${day}`)) return console.error("That isn't a valid day!");

	console.log(`\nRunning Day ${day} of ${year}...\n\n`);
	const started = Date.now();

	require(`./${year}/Day${day}`);

	console.log(`\n\nSuccess in ${Date.now() - started}ms!`);
})().then(() => rl.close());
