## uniq.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.

`uniq([2, 1, 2, 3]); // [2, 1, 3]`

Взаимный порядок оставшихся элементов в новом массиве должен сохраняться.

`uniq([2, 1, 2, 3]); // [2, 1, 3], a не [1, 2, 3] или не [3, 1, 2]`

### Подсказки

- Исходя из смысла задачи, для получения результата над исходным массивом надо провести операцию фильтрации.
  Для этого подходит метод `arr.filter(predicate)`.
- Метод `arr.indexOf(value)` можно "хитро" использовать для проверки дублирующихся значений.
