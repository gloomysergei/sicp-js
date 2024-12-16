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
      return cons(`${name1} был убит`, log);
    } else {
      const card = random(cards); // получили карту
      const cardName = car(card); // наименование карты
      const damage = cdr(card); // наносимый урон
      const message = `Игрок '${name1}' применил '${cardName}'
        против '${name2}' и нанес урон '${damage}'`;
      health1 - damage;
      return cons();
    }
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), "Начинаем бой!");
  return reverse(
    iter(startHealth, player1, startHealth, player2, 1, l(logItem))
  );
};

export default (cards) => (name1, name2) => run(name1, name2, cards);
