/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
// @ts-checkhttps://ide-js-ddp-tagged-data-8591688.evaluator3-8.hexlet.io/?#

import { cons, car, cdr, toString as pairToString } from "@hexlet/pairs"; // eslint-disable-line
import { attach, contents } from "@hexlet/tagged-types";

export const make = (name, percent) =>
  attach("PercentCard", cons(name, percent));

export const getName = (self) => car(contents(self));

export const damage = (self, health) =>
  Math.round(health * (cdr(contents(self)) / 100));
