const arr = [7, 4, 5, 1, 3];

const bubbleSort = (arr: number[]): number[] => {
  const leng = arr.length;
  for (let i = leng - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

bubbleSort(arr);
