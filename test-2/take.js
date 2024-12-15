// @ts-check
// eslint-disable-next-line
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  toString as listToString,
  reverse,
} from "@hexlet/pairs-data";

// BEGIN (write your solution here)
const take = (number, list) => {
  if (isEmpty(list)) {
    return l();
  }
  const item = (counter, acc, iter) => {
    if (counter === 0 || isEmpty(iter)) {
      return reverse(acc);
    }
    acc = cons(head(iter), acc);
    return item(counter - 1, acc, tail(iter));
  };
  return item(number, l(), list);
};
export default take;
// END
