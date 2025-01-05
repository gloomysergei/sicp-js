/* eslint-disable quotes */

const customRandom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const processCard = (cards, custom) => {
  const card = custom(cards);
  console.log(`Selected card: ${card}`);
};
const cards = ["A", "B", "C", "D", "E"];
processCard(cards, customRandom);
