import data from "./data.js";
import { compact, flatten, intersection } from "lodash";

let secondChars;
const start = new Date();

const flattened = intersection(compact(flatten(data), []));

console.log(new Date() - start);
console.log(flattened);
