// 가이드없이 개념만으로 실행이 가능하게 만든 코드
// 리팩터링 필요함

const nums = [10, 6, 8, 5, 7, 3, 4, 7, 4, 43, 32, 41, 4, 1, 455, 43];

const divide = (args: number[]) => {
  return args.map((num) => [num]);
};

const mergeAndSort = (arr1: number[] = [], arr2: number[] = []) => {
  const sorted = [];

  const arr1Length = arr1.length;
  const arr2Length = arr2.length;

  let p1 = 0;
  let p2 = 0;

  while (arr1Length + arr2Length !== sorted.length) {
    if (!arr1[p1]) {
      sorted.push(arr2[p2++]);
    } else if (!arr2[p2]) {
      sorted.push(arr1[p1++]);
    } else if (arr1[p1] >= arr2[p2]) {
      sorted.push(arr2[p2++]);
    } else if (arr2[p2] >= arr1[p1]) {
      sorted.push(arr1[p1++]);
    }
  }

  return sorted;
};

const merge2 = (numbers: number[]) => {
  let arr = divide(numbers);
  let res = [];
  while (arr.length !== 1) {
    for (let i = 0; i < arr.length; i += 2) {
      if (!arr[i + 1]) {
        res.push(arr[i]);
        break;
      }
      res.push(mergeAndSort(arr[i], arr[i + 1]));
    }
    arr = [...res];
    res = [];
  }
  console.log(arr);
};

merge2(nums);
