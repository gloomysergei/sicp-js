/* eslint-disable comma-dangle */
/* eslint-disable quotes */
// @ts-check

import { cons, car, cdr, toString as pairToString } from "@hexlet/pairs"; // eslint-disable-line
import {
  cons as consList,
  l,
  random,
  head,
  reverse,
  toString as listToString,
} from "@hexlet/pairs-data"; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      const element = cons(car(head(log)), `${name1} был убит`); // очень хитро
      const result = consList(element, log);
      return result;
    }
    const card = random(cards); // получили карту
    const cardName = car(card); // наименование карты
    const damage = cdr(card)(); // наносимый урон
    const message = `Игрок '${name1}' применил '${cardName}'
        против '${name2}' и нанес урон '${damage}'`;
    const newHealth = health2 - damage;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    // Формируем элемент лога формата cons(cons(health1, health2), message)
    // и добавляем его в лог.

    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), "Начинаем бой!");
  return reverse(
    iter(startHealth, player1, startHealth, player2, 1, l(logItem))
  );
};

// это и есть функция make!!!
export default (cards) => (name1, name2) => run(name1, name2, cards);
