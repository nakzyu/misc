const numbers = [2, 8, 5, 3, 9, 4, 1, 7, 6, 7];

const mergeSort = (
  arr: number[],
  temp: number[],
  start: number,
  end: number
) => {
  // 시작이 끝보다 작은동안만 재귀호출을 시행함
  if (start < end) {
    const mid = (start + end) / 2;
    mergeSort(arr, temp, start, mid);
    mergeSort(arr, temp, mid + 1, end);
    merge(arr, temp, start, mid, end);
  }
};

const merge = (
  arr: number[],
  temp: number[],
  start: number,
  mid: number,
  end: number
) => {
  temp = [...arr];
  let part1 = start;
  let part2 = mid + 1;
  let index = start;
};

const temp: number[] = [];
mergeSort(numbers, temp, 0, numbers.length - 1);
