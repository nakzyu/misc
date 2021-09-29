var numbers = [10, 6, 8, 5, 7, 3, 4, 7, 4, 43, 32, 41, 4, 1, 455, 43];
var mergeSort = function (a, n) {
    // 1이하로 쪼개어졌으면 호출 중단
    if (n < 2)
        return;
    var mid = Math.ceil(n / 2);
    var l = a.slice(0, mid);
    var r = a.slice(mid, n);
    mergeSort(l, mid);
    mergeSort(r, n - mid);
    merge(a, l, r, mid, n - mid);
};
var merge = function (a, l, r, left, right) {
    var i = 0, j = 0, k = 0;
    console.log(i, j, k, l, r);
    while (i < left && j < right) {
        if (l[i] <= r[j]) {
            a[k++] = l[i++];
        }
        else {
            a[k++] = r[j++];
        }
    }
    while (i < left) {
        a[k++] = l[i++];
    }
    while (j < right) {
        a[k++] = r[j++];
    }
    console.log(a);
};
mergeSort(numbers, numbers.length);
