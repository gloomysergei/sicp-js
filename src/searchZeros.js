// @ts-check

import {
  /* eslint-disable */
  l,
  cons as consList,
  isList,
  isEmpty,
  head,
  tail,
  concat,
  toString as listToString,
} from "@hexlet/pairs-data";

import {
  is,
  hasChildren,
  children,
  filter,
  reduce,
  toString as htmlToString,
  getValue,
} from "@hexlet/html-tags"; /* eslint-enable */

// Обход дерева в глубину
// Найти число нулей в дереве

const searchZeros = (tree) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    const current = head(list);
    const rest = tail(list);
    if (!isList(current)) {
      const newAcc = current === 0 ? acc + 1 : acc;
      return iter(rest, newAcc);
    } else {
      return iter(rest, iter(current, acc));
    }
  };
  return iter(tree, 0);
};
console.log(searchZeros(l(1, 3, l(5, l(9), 3), 10)));
console.log(searchZeros(l(0, l(l(0, 100), 0), 10)));
