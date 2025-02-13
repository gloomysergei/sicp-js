// @ts-check
const uniq = (arr) => {
  const result = arr.reduce((acc, elem) => {
    if (acc.indexOf(elem) === -1) {
      acc.push(elem);
    }
    return acc;
  }, []);
  return result;
};
export default uniq;
