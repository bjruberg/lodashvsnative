import data from "./data.js";
import { map } from "lodash";

let secondChars;
map(data, () => {}); // for bundle size comparission
const start = new Date();

for (let i = 1; i < 100000; i++) {
	secondChars = map(data, "1");
}

console.log(new Date() - start);
