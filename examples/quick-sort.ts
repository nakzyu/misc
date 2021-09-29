const numbers = [7, 8, 7, 4, 10, 3, 5, 6, 8, 8, 2, 44, 39, 60];

// not-in-Place
// 중복값의 위치가 바뀌지 않지만 메모리 낭비가 존재함
const quickSortA = (array: number[]) => {
  console.log(array);
  if (array.length < 2) return array;
  const pivotIndex = array.length - 1;
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < pivotIndex; i++) {
    if (array[i] <= array[pivotIndex]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSortA(left), array[pivotIndex], ...quickSortA(right)];
};

quickSortA(numbers);
