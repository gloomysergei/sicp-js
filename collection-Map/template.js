/* eslint-disable quotes */
{
  const map = new Map();
  map.set("1", "str1");
  map.set(1, "num1");
  map.set(true, "bool1");

  console.log(map.get(1));
  console.log(map.get("1"));
  console.log(map.size);
}

{
  // Map может использовать объекты в качестве ключей.
  const john = { name: "John" };

  // давайте сохраним количество посещений для каждого пользователя
  const visitsCountMap = new Map();

  // объект john - это ключ для значения в объекте Map
  visitsCountMap.set(john, 123);

  console.log(visitsCountMap.get(john)); // 123
}

{
  // перебор Map
  const recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
  ]);
  console.log(recipeMap.keys());
  console.log(recipeMap.values());
  console.log(recipeMap.entries());
}
