/* eslint-disable comma-dangle */
/* eslint-disable quotes */
// @ts-check

/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
// @ts-check

{
  /* eslint-disable quotes */
  // Процесс выбора карты снаружи
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
}

{
  /* eslint-disable arrow-body-style */
  /* eslint-disable quotes */
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
}
