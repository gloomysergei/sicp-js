// @ts-check
// eslint-disable-next-line
import {
  l,
  isEmpty,
  head,
  tail,
  filter,
  toString as listToString,
} from "@hexlet/pairs-data";

// BEGIN (write your solution here)
const sameParity = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  const first = head(list);
  if (first % 2 === 0) {
    // число четное---> сделать filter и выбрать все четные числа
    return filter((item) => item % 2 === 0, list);
  } //число нечетное ---> сделать filter и выбрать все нечетные числа
  return filter((item) => item % 2 != 0, list);
};
export default sameParity;
// END
