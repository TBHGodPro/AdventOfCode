const readline = require("node:readline");
const { readdir, readFile } = require("fs/promises");
const { join } = require("path");
const { writeFile } = require("node:fs/promises");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = question => new Promise((res, rej) => rl.question(question, answer => (answer ? res(answer) : rej("Empty Response"))));

console.log("\n-------------------------------------\nWelcome to my AdventOfCode Solutions!\n\nYou are running the Speed Test\n-------------------------------------\n");

(async () => {
	const year = await ask("What year would you like to use? (leave empty for current) ").catch(() => new Date().getFullYear().toString());

	const days = await readdir(join(__dirname, year)).catch(() => null);
	if (!days) return console.error(year.startsWith("20") && year.length == 4 ? "Oops, I didn't do AOC in that year!" : "That isn't a valid year!");

	console.log(`\nHere are the available days for ${year}:\n${days.map(day => day[3]).join("\n")}`);

	const day = parseInt(await ask("What Day would you like to run? ").catch(() => ""));
	if (!day) return console.error("No Day Inputted.");
	if (!days.includes(`Day${day}`)) return console.error("That isn't a valid day!");

	const amount = parseInt(await ask("\nHow many times would you like to run? ").catch(() => 10));
	if (!amount || !(amount > 0)) return console.error("Invalid Amount, please pass a number greater than 0.");

	const original = await readFile(join(__dirname, `${year}/Day${day}/index.js`), "utf-8");

	var normalLog = console.log;

	await writeFile(join(__dirname, `${year}/Day${day}/index.js`), `module.exports = () => {${original}};`, "utf-8");

	console.log(`\nRunning Day ${day} of ${year} ${amount} Times...`);
	const started = Date.now();

	console.log = () => {};
	try {
		for (let i = 0; i < amount; i++) require(`./${year}/Day${day}`)();
	} finally {
		console.log = normalLog;
		await writeFile(join(__dirname, `${year}/Day${day}/index.js`), original, "utf-8");
	}

	console.log(`\nSuccess in ${Date.now() - started}ms!`);
})().finally(() => rl.close());;
