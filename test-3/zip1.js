// @ts-check
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  reverse,
  toString as listToString,
  reduce,
} from "@hexlet/pairs-data"; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (oneList, twoList) => {
  if (isEmpty(oneList) || isEmpty(twoList)) {
    return l();
  }
  const result = reduce();
};
export default zip;
// END
// Как отследить конец списка--> isEmpty ---> отслеживать придеться для двух списков
// Как создать результирующий список --- reduce не подходит, он работает по одному списку
// а у нас их два
