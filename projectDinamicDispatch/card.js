/* eslint-disable quotes */
// @ts-check

import { contents } from "@hexlet/tagged-types";
import { getMethod } from "./generic.js";

// @ts-ignore
const getName = (self) => getMethod(self, "getName")(contents(self));
export default getName;

// BEGIN (write your solution here)

// END
