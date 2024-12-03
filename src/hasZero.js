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
// Найти в списке любой вложенности хотя бы один ноль

const hasZero = (list) => {
  if (isEmpty(list)) {
    return false;
  }
  const current = head(list);
  const rest = tail(list);
  // если текущий элемент не список ---> проверяем его на ноль
  if (!isList(current)) {
    if (current === 0) {
      return true;
    }
    // если текущий элемент список ---> запускаем hasZero рекурсивно
  } else if (hasZero(current)) {
    return true;
  }
  return hasZero(rest);
};

console.log(hasZero(l(1, 3, l(5, l(9), 3), 10)));
console.log(hasZero(l(1, l(l(5, 100), 0), 10)));
