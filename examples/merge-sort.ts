const numbers = [10, 6, 8, 5, 7, 3, 4, 7, 4, 43, 32, 41, 4, 1, 455, 43];

const mergeSort = (a: number[], n: number) => {
  // 1이하로 쪼개어졌으면 호출 중단
  if (n < 2) return;
  const mid = Math.ceil(n / 2);
  const l = a.slice(0, mid);
  const r = a.slice(mid, n);
  mergeSort(l, mid);
  mergeSort(r, n - mid);

  merge(a, l, r, mid, n - mid);
};

const merge = (
  a: number[],
  l: number[],
  r: number[],
  left: number,
  right: number
) => {
  let i = 0,
    j = 0,
    k = 0;

  while (i < left && j < right) {
    if (l[i] <= r[j]) {
      a[k++] = l[i++];
    } else {
      a[k++] = r[j++];
    }
  }

  while (i < left) {
    a[k++] = l[i++];
  }

  while (j < right) {
    a[k++] = r[j++];
  }
};

mergeSort(numbers, numbers.length);
