export const binarySearch = (
  arr: number[],
  left: number,
  right: number,
  target: number
): number => {
  if (target > arr[right]) return -1;
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, 0, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, arr.length - 1, target);
  }
};
