/*
 * Creates a bundle that does include some lodash functions, but not _.map(). 
 * It is here for being able to compare its with the bundle additionaly including _.map() created by lodashmapflatten.js
 */

import data from "./data.js";
import { compact, flatten, intersection } from "lodash";

let secondChars;
const start = new Date();

const flattened = intersection(compact(flatten(data), []));

