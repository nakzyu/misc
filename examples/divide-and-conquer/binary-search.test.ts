import { binarySearch } from "./binary-search";

test("sorted1", () => {
  const arr = [1, 2, 7, 11, 15, 19, 25, 30];
  expect(binarySearch(arr, 0, arr.length - 1, 30)).toBe(7);
});

test("sorted2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(binarySearch(arr, 0, arr.length - 1, 1)).toBe(0);
});

test("no target exist1", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(binarySearch(arr, 0, arr.length - 1, 500)).toBe(-1);
});

test("no target exist2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  expect(binarySearch(arr, 0, arr.length - 1, 8)).toBe(-1);
});
