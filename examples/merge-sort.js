var numbers = [2, 8, 5, 3, 9, 4, 1, 7, 6, 7];
var splitted = [];
var split = function (arr) {
    var leng = arr.length;
    if (arr.length === 1) {
        splitted.push(arr);
        return;
    }
    var end = leng - 1;
    var mid = Math.ceil(end / 2);
    split(arr.slice(0, mid));
    split(arr.slice(mid, end + 1));
};
split(numbers);
console.log(splitted);
var merge = function (a, b) { };
