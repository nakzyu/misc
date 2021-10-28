const numbers = [3, 7, 8, 5, 2, 1, 9, 5, 4];

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

// in-place
// 중복값의 위치가 바뀌지만 메모리 낭비가 없음
// 일단 정렬이 돌아는 가게 만들어본 코드
const reArrange = (arr: number[], start: number, end: number) => {
  if (end - start <= 1) return arr;

  console.log(arr, start, end);

  for (let left = start; left < end; left++) {
    if (arr[left] < arr[end]) continue;

    for (let next = left + 1; next <= end; next++) {
      if (end === next) {
        const temp = arr[end];
        arr[end] = arr[left];
        arr[left] = temp;
        reArrange(arr, start, left - 1);
        reArrange(arr, left + 1, end);
      }

      if (arr[next] < arr[end]) {
        const temp = arr[left];
        arr[left] = arr[next];
        arr[next] = temp;
        break;
      }
    }
  }
};

reArrange(numbers, 0, numbers.length - 1);
console.log(numbers);

const quickSortB = (arr: number[]) => {
  // 포인터는 피벗 엘레먼트에 픽스되어있다
  // first인덱스부터 포인터의값과 비교한다
  //
};
