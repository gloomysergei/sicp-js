/* eslint-disable quotes */
// @ts-check

const wordsCount = (words, stopWords) => {
  const wordsToLower = words.map((elem) => elem.toLowerCase());
  const uniq = wordsToLower.reduce((acc, elem) => {
    if (acc.indexOf(elem) === -1) {
      acc.push(elem);
    }
    return acc;
  }, []);
  const result = uniq.map((elem) => {
    words.reduce((count, item) => {
      if (item === elem) {
        count += 1;
      }
      return count;
    }, 0);
    return [elem, count];
  });

  return result;
  // return new Map(result);
};
export default wordsCount;
const data1 = [
  "HellO",
  "h",
  "And",
  "heLlo",
  "",
  "AND",
  "DOG",
  "oR",
  "cat",
  "HELLO",
  "caT",
];

console.log(wordsCount(data1));
