/* eslint-disable quotes */
/* eslint-disable no-undef */
import percentCard from "./percentCard.js";

const card = percentCard.make("Фаланговая знатность утешения", 40);
const cardName = percentCard.getName(card);
console.log(cardName);
const damage = percentCard.damage(card, health);
console.log(damage);
