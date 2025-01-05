/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import { cons, car, cdr } from "@hexlet/pairs";

const persentCard = {
  make: (name, percent) => cons(name, percent),
  getName: (card) => car(card),
  damage: (card, health) => Math.round(health * (cdr(card) / 100)),
};
export default persentCard;

// export const make = (name, percent) => cons(name, percent);
// export const getName = (card) => car(card);
// export const damage = (card, health) => Math.round(health * (cdr(card) / 100));
