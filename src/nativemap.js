import data from "./data.js";

let secondChars;
const start = new Date();

for (let i = 1; i < 100000; i++) {
	secondChars = Array.isArray(data) ? data.map(item => item[1]) : [];
}

console.log(new Date() - start);

