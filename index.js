// @ts-check

const customRamdom = (cardIndex, minIndex, maxIndex) => {
  return () => {
    if (cardIndex > maxIndex) {
      cardIndex = minIndex;
    }

    const currentIndex = cardIndex;
    cardIndex += 1;
    return currentIndex;
  };
};
console.log("Выводим индексы с 0 до 2. Начинаем с 0");
const getIndex = customRamdom(0, 0, 2);
for (let i = 0; i < 6; i += 1) {
  console.log(getIndex());
}
