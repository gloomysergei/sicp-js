// @ts-check
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  reverse,
  toString as listToString,
} from "@hexlet/pairs-data"; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (oneList, twoList) => {
  if (isEmpty(oneList) || isEmpty(twoList)) {
    return l();
  }
  if (!isEmpty(oneList) && !isEmpty(twoList)) {
    const one = head(oneList);
    const two = head(twoList);
    const element = reverse(cons(two, cons(one, l()))); // элемент результирующего списка
    return cons(element, zip(tail(oneList), tail(twoList)));
  }
};
export default zip;
// const list1 = l(1, 5, 3, 8, 9);
// const list2 = l(2, 3, 2, 1);
// console.log(listToString(zip(list1, list2)));
