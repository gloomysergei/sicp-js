Инверсия зависимостей всегда связана с изменением интерфейса (_сигнатуры функции_). Если ранее функция для запуска игры принимала на вход колоду карт и имена игроков, а возвращала лог игры, то теперь процесс игры разбился на два этапа: инициализация и сама игра.

Во время инициализации в функцию, создающую игру, передается колода карт и пользовательская функция `random()` (_та, которая выбирает случайную карту из колоды_).

Результатом этого вызова будет функция, которая, в свою очередь, запускает игру на выполнение. Она принимает на вход имена игроков и возвращает лог.

Задача этого упражнения - делегировать вызывающему коду формирование функции `random()`. Другими словами, функция `random()` должна передаваться при инициализации игры. Выглядит это так:

### Пример:

// инициализация

```
const customRandom = (c) => {
  cardIndex = cardIndex === 0 ? 1 : 0;
  return get(cardIndex, c);
};
const game = make(cards, customRandom);
```

// игра

`onst log = game('John', 'Ada');`

Такая инверсия позволит нам из недетерминированного кода сделать детерминированный. В примере выше как раз описывается алгоритм выбора карты, который всегда работает одинаковым способом.

## game.js

1. Создайте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра:

- колоду карт и
- функцию выбора случайного элемента из списка (списка карт).

Второй аргумент — опциональный, его значение по умолчанию — функция `random()` из `@hexlet/pairs-data`.

Ваша функция будет возвращать другую функцию. При этом возвращаемая функция работает следующим образом:

- принимает на вход имена игроков
- запускает игру
- возвращает лог игры

2. Допишите вызов пользовательской функции `random()` в функции `run()`.

## Процесс решения

1. Вообще непонятно как решать задачу, что требуется выполнить.Почему в задаче две точки входа для написания. Значит надо написать код для запуска всей программы.
2. В `game.js` это выглядит так:

```
export default (cards) => (name1, name2) => run(name1, name2, cards);
```

Значит в нашем случае это будет выглядеть так

```
export default (cards, customRandom) => (name1, name2) => run(name1, name2, cards);
```

3. Остается условие `возвращает лог игры`. А что возвращалось на рпредыдущем шаге? Возврат лога игры - т.е. список формы - Формируем элемент лога формата `cons(cons(health1, health2), message)`
4. Необходимо реализовать функцию `customRandom`
