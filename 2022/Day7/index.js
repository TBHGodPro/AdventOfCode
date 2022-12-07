const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
const list = data.split('\n');

let directories = {};
let current = [];
for (const item of list) {
	if (item.startsWith('$')) {
		if(item == "$ ls") continue;
		const path = item.substring(5);
		if (path == "/") {
			current = [];
			
		}
	}
}