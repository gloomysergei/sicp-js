/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
// @ts-check

import { contents } from "@hexlet/tagged-types";
import { getMethod } from "./generic.js";

// @ts-ignore
export const getName = (self) => getMethod(self, "getName")(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) =>
  // @ts-ignore
  getMethod(self, "damage")(contents(self), health);
// END
