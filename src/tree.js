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
} from "@hexlet/html-tags"; /* eslint-enable */

const list = l(l(1, 2), l(3, l(4, 5)), 6);
const countElements = (list) => {
  // является ли текущий элемент списком
  // если элемент не является списком (т.е. лист) - return 1
  if (!isList(list)) {
    return 1;
  }
  if (isEmpty(list)) {
    return 0;
  }
  // В случае, если элемент является списком,
  // функция рекурсивно вызывает себя для головы (head)
  // и хвоста (tail) списка и складывает результаты.
  return countElements(head(list)) + countElements(tail(list));
};
const result = countElements(list);
console.log(result);
