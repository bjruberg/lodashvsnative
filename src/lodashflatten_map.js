/*
 * Creates a bundle that does include some lodash functions and _.map(). It is here to compare its weight with the same build having build not including _.map()
 */

import data from "./data.js";
import { compact, flatten, intersection, map } from "lodash";

let secondChars;

for (let i = 1; i < 100000; i++) {
	secondChars = map(data, item => item[1]);
}

const flattened = intersection(compact(flatten(secondChars)), []);
console.log(flattened);
