## take.js

Реализуйте и экспортируйте по умолчанию функцию, которая возвращает список, состоящий из первых n (значение передается первым параметром) элементов исходного (переданного вторым параметром) списка. Остальные детали работы функции демонстрирует нижеприведённый код:

### Примеры:

```
take(3, l()); // ()
take(3, l(1, 2)); // (1, 2)
take(1, l(7, 2)); // (7)
```

### Подсказки

Используйте рекурсивный процесс