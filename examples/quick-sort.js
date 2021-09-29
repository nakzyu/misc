var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var numbers = [7, 8, 7, 4, 10, 3, 5, 6, 8, 8, 2, 44, 39, 60];
// not-in-Place
// 중복값의 위치가 바뀌지 않지만 메모리 낭비가 존재함
var quickSortA = function (array) {
    console.log(array);
    if (array.length < 2)
        return array;
    var pivotIndex = array.length - 1;
    var left = [];
    var right = [];
    for (var i = 0; i < pivotIndex; i++) {
        if (array[i] <= array[pivotIndex]) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSortA(left)), [array[pivotIndex]]), quickSortA(right));
};
quickSortA(numbers);
