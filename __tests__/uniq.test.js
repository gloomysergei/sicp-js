/* eslint-disable quotes */
// @ts-check
import uniq from "../collection-1/uniq.js";

test("uniq", () => {
  expect(uniq([])).toEqual([]);
  expect(uniq([2, 1])).toEqual([2, 1]);
  expect(uniq([2, 1, 2, 3])).toEqual([2, 1, 3]);
  expect(uniq([-2, 20, 0, 4, 20, 0])).toEqual([-2, 20, 0, 4]);
});
