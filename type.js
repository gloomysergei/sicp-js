/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import { attach, typeTag, contents } from "@hexlet/tagged-types";

const data = "text, pair, list or others";
const tag = attach("typeOfTag", data);
console.log(typeTag(tag));
console.log(contents(tag));
