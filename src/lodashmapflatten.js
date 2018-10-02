import data from "./data.js";
import { compact, flatten, intersection, map } from "lodash";

let secondChars;

for (let i = 1; i < 100000; i++) {
	secondChars = map(data, item => item[1]);
}

const flattened = intersection(compact(flatten(secondChars)), []);
console.log(flattened);
