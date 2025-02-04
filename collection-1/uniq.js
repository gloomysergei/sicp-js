// @ts-check
// BEGIN (write your solution here)
const f = (arr) => {
  arr.filter((elem) => arr.indexOff(elem) === -1);
};
export default f;
// END
/**
 * isCompare(eleem, arr) - если есть повторяющийся элемент - False
 *                         если нет повторяющихся элементов - True
 */
// const isCompare = (elem, arr) => arr.indexOff(elem) === (-1)

const unig = [2, 1, 2, 3];
console.log(f(unig));
